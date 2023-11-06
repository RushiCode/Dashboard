import { Component, OnInit } from '@angular/core';
import data from '../Json/data.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  topCard: any = [];
  recentOrders: any = [];
  newUsers: any = [];
  ngOnInit(): void {
 
    this.topCard = data.top_cards;
    this.recentOrders = data.recent_orders;
    this.newUsers = data.new_users;
    console.log(this.newUsers)
  }
  chart: any;
	
	chartOptions = {
	  animationEnabled: false,
	  exportEnabled: false,
    zoomEnabled: false,
   
	  title: {
		
		fontFamily: "'Public Sans', sans-serif",
		fontWeight: "bold"
	  },
    
	  axisY: {
      gridColor: "#e8e8e8",
      tickColor: "#e8e8e8" ,
    prefix: "$",
    lineThickness:0
	  },
    axisX: {
      lineColor: "#e8e8e8",
      tickLength: 0,
      tickThickness: 2
	  },
	  data: [{
		type: "spline",
    
    markerType: "none",
    color: "#4f6cdf",
		xValueFormatString: "DD",
		yValueFormatString: "#,###.##'%'",
    
    
    dataPoints: [
      { label: "Sun", y: 8 },     
      { label: "Mon", y: 13 },     
      { label: "Tue", y: 15 },     
      { label: "Wed", y: 20 },     
      { label: "Thu", y: 28 },     
      { label: "Fri", y: 24 },     
      { label: "Sat", y: 40 },     
      
    ]
	  }]
	}	
  getChartInstance(chart: object) {
    this.chart = chart;
  }


  chartOptionsbar = {
    theme: "light",
    // title:{
    //   text: "Platform Impressions by Quarter"
    // },
    animationEnabled: true,
    toolTip: {
      shared: true
    },
    legend: {
      horizontalAlign: "right",
      verticalAlign: "top",
      reversed: true
    },
    axisY: {
      gridColor: "#e8e8e8",
      tickColor: "#e8e8e8" ,
    prefix: "$",
    lineThickness:0,
    labelFontFamily: "'Public Sans', sans-serif",
  
	  },
    axisX: {
      lineColor: "#e8e8e8",
      tickLength: 0,
      tickThickness: 2,
      labelFontSize: 12,
      
      labelFontFamily: "'Public Sans', sans-serif",
      interval: 1,
			intervalType: "month",
			valueFormatString: "MMM"
     
	  },
    dataPointWidth: 10,
    data: [{
      type: "stackedColumn",
      color: "#4665e1",
      name: "Income",
      borderRadius: 200,
       
      showInLegend: true,
      dataPoints: [
        { label: "Jan", y: 40 },
        { label: "Feb", y: 120 },
        { label: "Mar", y: 70 },
        { label: "Apr", y: 30 },
        { label: "May", y: 20 },
        { label: "Jun", y: 90 },
        { label: "Jul", y: 30 },
        { label: "Aug", y: 0.5 },
        { label: "Sep", y: 55 },
        { label: "Oct", y: 150 },
        { label: "Nov", y: 80 },
        { label: "Dec", y: 40 },
      ]
    }, {
        type: "stackedColumn",
        cornerRadius: 100,
        color: "#beccff",
        name: "Borrow",
        showInLegend: true,
        
        dataPoints: [
          { label: "Jan", y: 30 },
        { label: "Feb", y: 70 },
        { label: "Mar", y: 30 },
        { label: "Apr", y: 20 },
        { label: "May", y: 20 },
        { label: "Jun", y: 30 },
        { label: "Jul", y: 30 },
        { label: "Aug", y: 8 },
        { label: "Sep", y: 35 },
        { label: "Oct", y: 40 },
        { label: "Nov", y: 20 },
        { label: "Dec", y: 10 },
        ]
    }]
  }	

  chartpie = {
	  animationEnabled: true,
	 
    colorSet: "customColorSet",
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    
    subtitles: [{
      text: "50%",
      verticalAlign: "center",
      dockInsidePlotArea: true,
      fontColor: "#000000",
      fontSize: 40,
      fontFamily: "'Public Sans', sans-serif",
    }],
    data: [
    {
      //startAngle: 45,
     indexLabelFontSize: 12,
     indexLabelFontFamily: "Garamond",
     indexLabelFontColor: "darkgrey",
     indexLabelLineColor: "darkgrey",
     indexLabelPlacement: "outside",
     type: "doughnut",
     showInLegend: true,
     dataPoints: [
     {  y: 53.37, legendText:"Man", indexLabel: "Man" , color: "#3e5bd1" },
     {  y: 35.0, legendText:"Electronics", indexLabel: "Electronics " ,color: "#6785ef"},
     {  y: 7, legendText:"Women", indexLabel: "Women", color: "#90a6ff"},
    
     ]
   }
   ]
	}	
}
