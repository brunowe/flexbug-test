import { Component } from "react";
import xmlData from "./list.xml";
import XMLParser from "react-xml-parser";

var jsonDataFromXml = new XMLParser().parseFromString(xmlData);

export default class Feed extends Component {
  render() {
    return jsonDataFromXml;
  }
}
