﻿// Add table of contents in English here
function addContents(context) {
    addArticle(context, "../../", "Home");
    addArticle(context, "", "Software Overview");
    addArticle(context, "software-overview/software-purpose.html", "Software Purpose and Characteristics", 1);
    addArticle(context, "software-overview/software-architecture.html", "Software Architecture", 1);
    addArticle(context, "", "Description of Applications", 1);
    addArticle(context, "software-overview/server-application.html", "Server", 2);
    addArticle(context, "software-overview/communicator-application.html", "Communicator", 2);
    addArticle(context, "software-overview/webstation-application.html", "Webstation", 2);
    addArticle(context, "software-overview/administrator-application.html", "Administrator", 2);
    addArticle(context, "software-overview/table-editor-application.html", "Table Editor", 2);
    addArticle(context, "software-overview/scheme-editor-application.html", "Scheme Editor", 2);

    addArticle(context, "", "Installation and Start");
    addArticle(context, "installation-and-run/system-requirements.html", "System Requirements", 1);
    addArticle(context, "installation-and-run/software-installation.html", "Software Installation", 1);
    addArticle(context, "installation-and-run/start-applications.html", "Start Applications", 1);
    addArticle(context, "installation-and-run/migrate-configuration.html", "Migrate Configuration to New Server", 1);
    addArticle(context, "installation-and-run/software-update.html", "Software Update", 1);

    addArticle(context, "", "Software Configuration");
    addArticle(context, "", "General Configuration Sequence", 1);
    addArticle(context, "", "Tune up Configuration Database", 1);
    addArticle(context, "", "Using Formulas", 1);
    addArticle(context, "", "User Authentication Configuration", 1);
    addArticle(context, "", "Communication with Devices Configuration", 1);
    addArticle(context, "", "Creating Views", 1);

    addArticle(context, "", "Use Cases");
    addArticle(context, "use-cases/modbus-protocol.html", "Connecting Devices Using Modbus Protocol", 1);
    addArticle(context, "use-cases/opc-standard.html", "Connecting Devices Using OPC Standard", 1);

    addArticle(context, "", "Version History");
    addArticle(context, "version-history/scada-history.html", "Rapid SCADA", 1);
    addArticle(context, "", "Modules", 1);
    addArticle(context, "version-history/modules/chart-pro-history.html", "Chart Pro", 2);
    addArticle(context, "version-history/modules/elastic-report-history.html", "Elastic Report", 2);
}
