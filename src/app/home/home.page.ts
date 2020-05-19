import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { MobileService } from '../services/mobile.service';
import { Device } from '@ionic-native/device/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { DeviceAccounts } from '@ionic-native/device-accounts/ngx';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information/ngx';
import { Chart } from 'chart.js';

var results: [];

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})

export class HomePage implements AfterViewInit {
  @ViewChild("doughnutCanvas", { static: false }) doughnutCanvas: ElementRef;

  public doughnutChart: Chart;
  data: any;
  public model: any;
  public manufacture: any;
  public platform: any;
  public serial: any;
  public uuid: any;
  public version: any;
  public isVirtual: any;
  public cordova: any;

  constructor(
    public mobileService: MobileService,
    public device: Device,
    public diagnostic: Diagnostic) { }

  ngAfterViewInit() {
    this.getData();
    this.getMobileInfo();
  }

  getData() {
    fetch('../assets/data.json')
      .then(res => res.text())
      .then(json => {
        this.data = json;
      })
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["YT", "FB", "IG", "WhatsApp", "Netflix", "Others"],
        datasets: [
          {
            data: [56, 46, 24, 58, 40, 62],
            backgroundColor: [
              "rgba(252, 59, 59, 1)",
              "rgba(177, 134, 172, 1)",
              "rgba(179, 247, 177, 1)",
              "rgba(193, 239, 107, 1)",
              "rgba(18, 211, 18, 1)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
          }
        ]
      }
    });
  }

  getMobileInfo() {
    this.model = this.device.model;
    this.manufacture = this.device.manufacturer;
    this.platform = this.device.platform;
    this.serial = this.device.serial;
    this.uuid = this.device.uuid;
    this.version = this.device.version;
    this.isVirtual = this.device.isVirtual
    this.cordova = this.device.cordova;
  }
}