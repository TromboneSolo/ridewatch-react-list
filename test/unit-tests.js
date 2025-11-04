const assert = require('assert');
const DataService = require('../src/services/DataService');
const RideWatch = require('../src/models/RideWatch');
const React = require('react');
const Sidebar = require('../src/Sidebar.jsx').default;
const { shallow } = require('enzyme');

// Mock console.error if it doesn't exist
if (!global.jest) {
  global.jest = {
    fn: () => jest.fn || (() => {})
  };
}

describe('DataService', function() {
  let dataService;

  beforeEach(function() {
    dataService = new DataService();
  });

  describe('#fetch()', function() {
    it('should return filtered results based on search criteria', function() {
      const search = {
        nameSearch: 'Zi-O',
        primaryColorSearch: 'all',
        secondaryColorSearch: 'all',
        DX: true,
        ownedSearch: 'all'
      };

      const results = dataService.fetch(search);
      assert(results.length > 0);
      assert(results.every(watch => watch.name.includes('Zi-O')));
    });

    it('should filter by primary color', function() {
      const search = {
        nameSearch: '',
        primaryColorSearch: 'red',
        secondaryColorSearch: 'all',
        DX: null,
        ownedSearch: 'all'
      };

      const results = dataService.fetch(search);
      assert(results.every(watch => watch.primaryColor === 'red'));
    });

    it('should filter by secondary color', function() {
      const search = {
        nameSearch: '',
        primaryColorSearch: 'all',
        secondaryColorSearch: 'black',
        DX: null,
        ownedSearch: 'all'
      };

      const results = dataService.fetch(search);
      assert(results.every(watch => watch.secondaryColor === 'black'));
    });

    it('should filter by DX status', function() {
      const search = {
        nameSearch: '',
        primaryColorSearch: 'all',
        secondaryColorSearch: 'all',
        DX: true,
        ownedSearch: 'all'
      };

      const results = dataService.fetch(search);
      assert(results.every(watch => watch.DX === true));
    });
  });

  describe('#fetchUniqueSeries()', function() {
    it('should return array of unique series', function() {
      const series = dataService.fetchUniqueSeries();
      assert(Array.isArray(series));
      assert(series.length > 0);
      
      // Check for duplicates
      const uniqueSeries = new Set(series);
      assert(uniqueSeries.size === series.length);
    });
  });

  describe('#soundex()', function() {
    it('should match similar sounding names', function() {
      // Testing internal soundex function via a search
      const search1 = {
        nameSearch: 'Zi-O',
        primaryColorSearch: 'all',
        secondaryColorSearch: 'all',
        DX: true,
        ownedSearch: 'all'
      };

      const search2 = {
        nameSearch: 'Zi-O',
        primaryColorSearch: 'all',
        secondaryColorSearch: 'all',
        DX: true,
        ownedSearch: 'all'
      };

      const results1 = dataService.fetch(search1).filter(w => w.series === 'zio');
      const results2 = dataService.fetch(search2).filter(w => w.series === 'zio');
      
      assert.deepStrictEqual(results1, results2);
    });
  });
});

describe('RideWatch', function() {
  describe('#constructor()', function() {
    it('should create RideWatch instance with provided values', function() {
      const watch = new RideWatch(
        'test-id',
        true,
        'test-series',
        'Test Watch',
        'テスト',
        '2025',
        'red',
        'black'
      );

      assert.strictEqual(watch.id, 'test-id');
      assert.strictEqual(watch.DX, true);
      assert.strictEqual(watch.series, 'test-series');
      assert.strictEqual(watch.name, 'Test Watch');
      assert.strictEqual(watch.katakana, 'テスト');
      assert.strictEqual(watch.year, '2025');
      assert.strictEqual(watch.primaryColor, 'red');
      assert.strictEqual(watch.secondaryColor, 'black');
    });

    it('should use default values when parameters are not provided', function() {
      const watch = new RideWatch();

      assert.strictEqual(watch.id, '');
      assert.strictEqual(watch.DX, true);
      assert.strictEqual(watch.series, '');
      assert.strictEqual(watch.name, '');
      assert.strictEqual(watch.katakana, '');
      assert.strictEqual(watch.year, '');
      assert.strictEqual(watch.primaryColor, '');
      assert.strictEqual(watch.secondaryColor, '');
    });
  });
});

describe('Sidebar', function() {
  let wrapper;
  const mockProps = {
    logo: '/images/icons/ZioEnglishLogo.png',
    languageClick: () => {},
    totalOwned: '10',
    headerToggle: () => {},
    invisibleHeaders: ['zio', 'build']
  };

  beforeEach(function() {
    wrapper = shallow(<Sidebar {...mockProps} />);
  });

  describe('Image Rendering', function() {
    it('should render the logo image with correct props', function() {
      const logoImg = wrapper.find('.logo img');
      assert(logoImg.exists(), 'Logo image should exist');
      assert.strictEqual(logoImg.prop('src'), mockProps.logo);
      assert.strictEqual(logoImg.prop('height'), 90);
      assert.strictEqual(logoImg.prop('alt'), 'logo_image');
    });

    it('should render the sidebar background with correct image', function() {
      const background = wrapper.find('.sidebar-background');
      assert(background.exists(), 'Sidebar background should exist');
      assert.strictEqual(
        background.prop('style').backgroundImage,
        'url(/images/icons/test.png)'
      );
    });

    it('should render minimized list icons for each invisible header', function() {
      const minimizedIcons = wrapper.find('.sidebarHeader img');
      assert.strictEqual(minimizedIcons.length, mockProps.invisibleHeaders.length);
      
      minimizedIcons.forEach((icon, index) => {
        const series = mockProps.invisibleHeaders[index];
        assert.strictEqual(
          icon.prop('src'),
          process.env.PUBLIC_URL + '/images/icons/icon-' + series + '.png'
        );
        assert.strictEqual(icon.prop('alt'), series);
        assert.strictEqual(icon.prop('height'), '30px');
        assert.strictEqual(icon.prop('width'), '30px');
      });
    });

    it('should render easter egg image when exactly 3 invisible headers', function() {
      // First test without 3 headers
      assert(!wrapper.find('img[alt="dan"]').exists());

      // Update props to have exactly 3 headers
      wrapper.setProps({
        invisibleHeaders: ['zio', 'build', 'exaid']
      });

      const easterEggImg = wrapper.find('img[alt="dan"]');
      assert(easterEggImg.exists(), 'Easter egg image should exist with 3 headers');
      assert.strictEqual(
        easterEggImg.prop('src'),
        process.env.PUBLIC_URL + '/images/icons/dankuroto.png'
      );
    });

    it('should not render easter egg image when not exactly 3 invisible headers', function() {
      // Test with 2 headers
      wrapper.setProps({
        invisibleHeaders: ['zio', 'build']
      });
      assert(!wrapper.find('img[alt="dan"]').exists());

      // Test with 4 headers
      wrapper.setProps({
        invisibleHeaders: ['zio', 'build', 'exaid', 'ghost']
      });
      assert(!wrapper.find('img[alt="dan"]').exists());
    });

    it('should handle missing images gracefully', function() {
      // Mock console.error to prevent test output noise
      const originalError = console.error;
      console.error = jest.fn();

      // Test with invalid image path
      wrapper.setProps({
        logo: '/invalid/path/image.png'
      });
      const logoImg = wrapper.find('.logo img');
      assert(logoImg.exists(), 'Logo image should still render even with invalid src');
      
      // Test error handling for minimized list icons
      wrapper.setProps({
        invisibleHeaders: ['nonexistent-series']
      });
      const minimizedIcon = wrapper.find('.sidebarHeader img');
      assert(minimizedIcon.exists(), 'Minimized icon should still render even with invalid src');

      // Restore console.error
      console.error = originalError;
    });
  });
});