import { Record } from "react-admin";

export interface JoinClass extends Record {
  class_name: string,
  zoom_link: string,
  zoomid: string,
  zoom_pass: string,
  gclass_link: string,
  gclass_code: string,
  gdoc_link: string,
  groupchat_link: string,
  gdrive_link: string
}
