'use strict';

page('/', projectsController.showProjects);
page('/about', aboutController.showAbout);

page('/projectType/:projectType', projectsController.showByType);

page();
