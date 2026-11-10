import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface Post {
  title:       string;
  description: string;
  category:    string;
  tags:        string[];
  email:       string;
  publishNow:  boolean;
  publishDate: NgbDateStruct | null;
}