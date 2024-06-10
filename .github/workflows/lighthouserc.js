module.exports = {
    ci: {
      collect: {
        
        url: ['https://sfmarty123.github.io/jftl-lighthouse-workshop/’],
      },
      assert: {
        preset: 'lighthouse:recommended',
      },
      upload: {
        target: 'temporary-public-storage’, 
      },   },  };
