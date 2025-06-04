// Add this error handling middleware to your server.js
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ 
      error: 'Internal Server Error',
      message: 'An unexpected error occurred',
      type: 'json_error' // Add this to identify in frontend
    });
  });
  
  // Modify your API route to ensure JSON response
  app.get('/api/shows', async (req, res) => {
    try {
      const artist = req.query.artist;
      
      if (!artist) {
        return res.status(400).json({ 
          error: 'Missing artist parameter',
          type: 'json_error'
        });
      }
  
      // Force JSON response even if scraping fails
      const shows = await attemptScraping(artist).catch(() => []);
      
      if (shows.length === 0) {
        return res.status(404).json({
          message: 'No shows found',
          links: getPlatformSearchLinks(artist),
          type: 'json_error'
        });
      }
      
      res.json(shows);
      
    } catch (error) {
      res.status(500).json({
        error: 'Failed to fetch shows',
        message: error.message,
        links: getPlatformSearchLinks(req.query.artist || ''),
        type: 'json_error'
      });
    }
  });