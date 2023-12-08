// spec/your-tests.spec.js

describe('Your HTML Project Tests', () => {
    it('should have a valid HTML structure', () => {
      const indexHtml = document.body.innerHTML;
      expect(indexHtml).toContain('<html>');
      expect(indexHtml).toContain('<head>');
      expect(indexHtml).toContain('<body>');
    });
  
    it('should load your JavaScript file', () => {
      const scripts = document.querySelectorAll('script[src="js/your-scripts.js"]');
      expect(scripts.length).toBe(1);
    });
  
    // Add more tests as needed...
  });
  