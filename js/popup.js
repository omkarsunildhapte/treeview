document.addEventListener("DOMContentLoaded", function () {
  const projectsData = [
    {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
      "Jobs": [
        {
          "GUID": "5f8a4127-22e3-4ae0-bee8-6d2a90aa93fc",
          "BarID": "B0KEPO",
          "Name": "3D Build",
          "TypeID": 2,
          "LVN": 3,
          "CVN": 0,
          "CreatedDate": "06-Nov-23 11:30:07 AM",
          "SyncStatus": "synced",
          "Status": "Created",
          "JobPathNumber": "",
          "MaterialSpec": "",
          "Quantity": 10,
          "Operations": [
            {
              "GUID": "590807be-8a4d-4a08-850f-47c5a5f6fc20",
              "BarID": "2Y829T",
              "Name": "Additive MFG",
              "TypeID": 3,
              "LVN": 8,
              "CVN": 0,
              "CreatedDate": "22-Nov-23 9:34:33 AM",
              "SyncStatus": "synced",
              "Status": "Processed",
              "Quantity": 0,
              "QuantityCompleted": 0,
              "QuantityRejected": 0,
              "HopperRecovery": 10,
              "BuildRecovery": 20,
              "StartTime": "14-Nov-23 5:15:02 PM",
              "EndTime": "14-Nov-23 5:16:23 PM",
              "TimeSpent": "0:0:12",
              "IsDone": true,
              "InProgress": true,
              "OperationType": "Build"
            }
          ]
        }
      ]
    },
    {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
      "Jobs": [
        {
          "GUID": "b6788070-ce0e-4a87-a41d-f95dfd5fdf8b",
          "BarID": "Y9D1OM",
          "Name": "Job 1",
          "TypeID": 2,
          "LVN": 1,
          "CVN": 0,
          "CreatedDate": "14-Nov-23 5:18:11 PM",
          "SyncStatus": "synced",
          "Status": "Created",
          "JobPathNumber": "",
          "MaterialSpec": "",
          "Quantity": 0,
          "Operations": [
            {
              "GUID": "a2fd6630-a971-4f69-9659-0b19c4d7900f",
              "BarID": "6AIOZ0",
              "Name": "Issue Material",
              "TypeID": 3,
              "LVN": 10,
              "CVN": 0,
              "CreatedDate": "22-Nov-23 9:34:33 AM",
              "SyncStatus": "synced",
              "Status": "WorkInProgress",
              "Quantity": 0,
              "QuantityCompleted": 0,
              "QuantityRejected": 0,
              "HopperRecovery": 0,
              "BuildRecovery": 0,
              "StartTime": "16-Nov-23 3:30:08 PM",
              "EndTime": "14-Nov-23 5:18:28 PM",
              "TimeSpent": "0:0:40",
              "IsDone": false,
              "InProgress": true,
              "OperationType": "StockRecovery"
            }
          ]
        }
      ]
    },
    {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
      "Jobs": [
        {
          "GUID": "999f2460-6617-4368-9785-49906e26f908",
          "BarID": "7IY9EP",
          "Name": "J2",
          "TypeID": 2,
          "LVN": 1,
          "CVN": 0,
          "CreatedDate": "17-Nov-23 2:47:41 PM",
          "SyncStatus": "synced",
          "Status": "Created",
          "JobPathNumber": "",
          "MaterialSpec": "",
          "Quantity": 0,
          "Operations": [
            {
              "GUID": "5a4f5631-ced3-4a45-9b68-83464a3d07df",
              "BarID": "ZU7AK4",
              "Name": "Issue Material",
              "TypeID": 3,
              "LVN": 1,
              "CVN": 0,
              "CreatedDate": "22-Nov-23 9:34:33 AM",
              "SyncStatus": "synced",
              "Status": "Created",
              "Quantity": 0,
              "QuantityCompleted": 0,
              "QuantityRejected": 0,
              "HopperRecovery": 0,
              "BuildRecovery": 0,
              "StartTime": "17-Nov-23 2:47:49 PM",
              "EndTime": "17-Nov-23 2:47:49 PM",
              "TimeSpent": "0:0:0",
              "IsDone": false,
              "InProgress": false,
              "OperationType": "StockRecovery"
            }
          ]
        }
      ]
    },
    {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
      "Jobs": [
        {
          "GUID": "cfb13e1c-cda2-4d38-9d8d-bcd16676c9ec",
          "BarID": "PL3DSC",
          "Name": "Job 3",
          "TypeID": 2,
          "LVN": 1,
          "CVN": 0,
          "CreatedDate": "17-Nov-23 2:47:56 PM",
          "SyncStatus": "synced",
          "Status": "Created",
          "JobPathNumber": "",
          "MaterialSpec": "",
          "Quantity": 0,
          "Operations": [
            {
              "GUID": "c8f870cf-48b9-4cf7-8e38-bf3b8eb9133e",
              "BarID": "AV9XLW",
              "Name": "Issue Material",
              "TypeID": 3,
              "LVN": 1,
              "CVN": 0,
              "CreatedDate": "22-Nov-23 9:34:33 AM",
              "SyncStatus": "synced",
              "Status": "Created",
              "Quantity": 0,
              "QuantityCompleted": 0,
              "QuantityRejected": 0,
              "HopperRecovery": 0,
              "BuildRecovery": 0,
              "StartTime": "17-Nov-23 2:47:56 PM",
              "EndTime": "17-Nov-23 2:47:56 PM",
              "TimeSpent": "0:0:0",
              "IsDone": false,
              "InProgress": false,
              "OperationType": "StockRecovery"
            }
          ]
        }
      ]
    }
  ]

})