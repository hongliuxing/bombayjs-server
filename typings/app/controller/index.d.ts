// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProject from '../../../app/controller/project';
import ExportUser from '../../../app/controller/user';
import ExportWebIndex from '../../../app/controller/web/index';
import ExportWxIndex from '../../../app/controller/wx/index';

declare module 'egg' {
  interface IController {
    project: ExportProject;
    user: ExportUser;
    web: {
      index: ExportWebIndex;
    }
    wx: {
      index: ExportWxIndex;
    }
  }
}
