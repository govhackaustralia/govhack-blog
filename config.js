// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        // Change this to your Ghost blog's published URL.
        url: 'http://test1.ghost.alanyeung.net',

        // Example mail config
        // Visit http://support.ghost.org/mail for instructions
        mail: {
            transport: 'SMTP',
            options: {
                host: 'smtp.mandrillapp.com',
                port: 587,
                service: 'Mandrill',
                auth: {
                    user: process.env.MANDRILL_USERNAME, 
                    pass: process.env.MANDRILL_PASSWORD
                }
            }
        },
        // #### Database
        // Ghost supports sqlite3 (default), MySQL & PostgreSQL
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },
        // #### Server
        // Can be host & port (default), or socket
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '127.0.0.1',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2346'
        },
        // #### Paths
        // Specify where your content directory lives
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    },

    production: {
        url: 'http://blog.govhack.org',
        mail: {
            transport: 'SMTP',
            options: {
                host: 'smtp.mandrillapp.com',
                port: 587,
                service: 'Mandrill',
                auth: {
                    user: process.env.MANDRILL_USERNAME, 
                    pass: process.env.MANDRILL_PASSWORD
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost.db')
            },
            debug: false
        },
        server: {
            host: '0.0.0.0',
            port: '2346'
        },
        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;
