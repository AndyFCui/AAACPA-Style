# TW-Style Theme for Redmine

![Redmine](https://img.shields.io/badge/Redmine-5.1-brightgreen)

A modern, clean, and user-friendly theme for Redmine that enhances the user experience while maintaining compatibility with both English and Chinese interfaces.

## Overview

TW-Style is a free, open-source theme designed to modernize your Redmine installation. It features a clean interface, responsive design, and enhanced usability while maintaining full compatibility with Redmine's core functionality and popular plugins.

## Key Features

### Modern Interface
- Clean and minimalist design
- Responsive layout for all devices
- Smooth page transitions
- Optimized typography for both English and Chinese text
- Collapsible sidebar for better space management

### Customization Options
- Easy logo customization through the settings page
- Priority-based issue coloring
- Customizable color scheme
- Flexible layout adjustments
- Support for custom CSS variables

### Enhanced Functionality
- Improved project card layout
- Better issue list visualization
- Enhanced calendar and Gantt chart views
- Optimized wiki page display
- Better document management interface

### Plugin Support
- Redmine Agile integration
- Local avatars support
- Additional plugins compatibility
- Custom plugin styling

## Installation

1. Download the latest release from the releases page
2. Extract the contents to your Redmine's themes directory:
   - Standard installation: `[redmine_root]/public/themes/`
   - Bitnami: `[bitnami_install_dir]/apps/redmine/htdocs/public/themes/`
   - Docker: `/usr/src/redmine/public/themes/`
3. Navigate to Administration > Settings > Display
4. Select "TW-Style" from the theme dropdown
5. Save your changes

## Customization Guide

### Logo Customization
1. Access Administration > Settings
2. Locate the "Logo Settings" section
3. Upload your custom logo (recommended size: 200x50px)
4. The changes will be applied immediately
5. Use the reset button to restore the default logo

### Style Customization
The theme supports customization through CSS variables in `stylesheets/application.css`:
- Color schemes
- Typography settings
- Layout spacing
- Component styling

## Screenshots

![Overview](screenshots/TW-Style-redmine-overview.png)
![Issues](screenshots/TW-Style-redmine-issue.png)
![Issue List](screenshots/TW-Style-redmine-issueList.png)
![Gantt Chart](screenshots/TW-Style-redmine-gantt.png)

## Requirements

- Redmine 4.1 or higher
- Modern web browser with CSS3 support
- JavaScript enabled

## Contributing

We welcome contributions to improve TW-Style. Here's how you can help:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Please ensure your code follows the existing style and includes appropriate documentation.

## Support

For support, please:
- Check the [documentation](https://redmine-tw.net)
- Open an issue on GitHub
- Contact the maintainers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

Developed and maintained by the Redmine-TW community.
