document.addEventListener("DOMContentLoaded", function () {
  const accordionProjects = document.getElementById("accordionProjects");


  let videoStream = null;


  //===> CAMERA <===
  barcodeCameraBtn.onclick = function () {
    barcodeCameraDiv.classList.remove("d-none");
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          const videoElement = document.getElementById("barcodeCamera");
          videoElement.srcObject = stream;
        })
        .catch(function (error) {
          console.error("Error accessing camera:", error);
        });
    } catch (error) {
      console.error("Error accessing camera:", error);
    }

    barcodeClose.onclick = function () {
      barcodeCameraDiv.classList.add("d-none");
    };
  };
  //====> DARK AND LIGHT THEME BUTTON <====
  const checkboxDarkLight = document.getElementById("checkboxDarkLight");
  const root = document.documentElement;

  checkboxDarkLight.addEventListener("change", () => {
    if (checkboxDarkLight.checked) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  });

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
  const itemsPerPage = 6;
  let currentPage = 1;

  function createProjectTable(project) {
    const row = document.createElement("tr");
    let squareColor = "";
    if (project.LVN === 1) {
      squareColor = "#1d4ed8";
    } else if (project.LVN === 2) {
      squareColor = "#a21caf";
    } else if (project.LVN === 3) {
      squareColor = "#4d7c0f";
    } else {
      squareColor = "#fde047";
    }

    row.innerHTML = `
        <td class="text-start py-2 d-flex gap-2 accordion-header">
            <div class="col-auto">
                <span class="fas fa-angle-down"></span>
                <i class="fa fa-square project" style="color: ${squareColor};"></i>
            </div>
            <span class="border-bottom border-dark">${project.BarID}</span>
        </td> 
        <td class="text-start py-2">${project.Name}</td>
        <td class="text-start py-2">${project.CreatedDate}</td>
        <td class="text-start py-2 d-flex justify-content-between">${project.Status} </td>
    `;

    const additionalContentDiv = document.createElement('div');
    additionalContentDiv.classList.add('additional-content', 'd-none');
    additionalContentDiv.innerHTML = `
        <!-- Your additional content goes here -->
        <p>Additional content goes here</p>
    `;
    row.appendChild(additionalContentDiv);

    const cell = row.querySelector('.accordion-header');
    const arrowIcon = row.querySelector('.fa-angle-down');

    cell.addEventListener('click', () => {
      arrowIcon.classList.toggle('fa-angle-down');
      arrowIcon.classList.toggle('fa-angle-up');
      additionalContentDiv.classList.toggle('d-none');
    });

    return row;
  }

  function addProjectsToTable(startIndex, endIndex) {
    const tableBody = document.getElementById("projectTableBody");
    tableBody.innerHTML = ""; // Clear existing content

    for (let i = startIndex; i < endIndex; i++) {
      const projectRow = createProjectTable(projectsData[i]);
      tableBody.appendChild(projectRow);
    }
  }

  function updatePagination() {
    const totalProjects = projectsData.length;
    const totalPages = Math.ceil(totalProjects / itemsPerPage);
    const paginationElement = document.getElementById("paginationProjects");
    paginationElement.innerHTML = ""; // Clear existing pagination

    for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      const a = document.createElement("a");
      a.classList.add("page-link");
      a.href = "#";
      a.textContent = i;
      a.addEventListener("click", function () {
        currentPage = i;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(currentPage * itemsPerPage, totalProjects);
        addProjectsToTable(startIndex, endIndex);
        updatePagination();
      });
      li.appendChild(a);
      paginationElement.appendChild(li);
    }
  }

  function initializePage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, projectsData.length);
    addProjectsToTable(startIndex, endIndex);
    updatePagination();
  }

  initializePage();







  ///dot design
  const operationsData = projectsData.flatMap(e => e.Jobs.flatMap(main => main.Operations));
  const operationsList = document.getElementById("operationsList");

  operationsData.forEach((operation, index) => {
    const operationUI = createOperationUI(operation, index + 1);
    operationsList.appendChild(operationUI);
  });

  function createOperationUI(operation, dotValue) {
    const operationElement = document.createElement("div");
    const lineshow = document.createElement('div');
    operationElement.classList.add("operations-list");

    const listItem = document.createElement("div");
    const dotShow = document.createElement('span');
    dotShow.classList.add("dot");
    dotShow.innerHTML = dotValue;

    listItem.innerHTML = `
              <p>${operation.Name}</p>
              <p>Starting Date: ${operation.StartTime}</p>
              <p>End Time: ${operation.EndTime}</p>
          `;

    lineshow.appendChild(dotShow);
    operationElement.appendChild(lineshow);
    operationElement.appendChild(listItem);

    const line = document.createElement('div');
    line.classList.add('line');
    lineshow.appendChild(line);

    const dotHeight = dotShow.clientHeight / 2;
    const listItemHeight = listItem.clientHeight;
    const lineTop = dotHeight + listItemHeight / 2;
    line.style.top = lineTop + 'px';

    return operationElement;
  }

  //timer design
  const startButton = document.getElementById('operationStatusStartButtons');
  const pauseResumeButton = document.getElementById('operationStatusPauseResumeButtons');
  const endButton = document.getElementById('operationEndButtons');
  const timerData = document.getElementById('operationTimerData');
  document.getElementById('faPlay').classList.add('d-block');
  let timerInterval;
  let timerSeconds = 0;

  function updateTimer() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    timerData.textContent = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    timerInterval = setInterval(function () {
      timerSeconds++;
      updateTimer();
    }, 1000);
    startButton.style.display = 'none';
    pauseResumeButton.style.display = 'flex';
    pauseResumeButton.disabled = false;
    endButton.disabled = false;
  }

  function pauseResumeTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      document.getElementById('faPause').classList.add('d-none');
      document.getElementById('faPlay').classList.remove('d-none');
    } else {
      timerInterval = setInterval(function () {
        timerSeconds++;
        updateTimer();
      }, 1000);
      document.getElementById('faPause').classList.remove('d-none');
      document.getElementById('faPlay').classList.add('d-block');
    }
  }

  function endTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timerSeconds = 0;
    updateTimer();
    startButton.style.display = 'flex';
    pauseResumeButton.style.display = 'none';
    endButton.disabled = true;
  }

  startButton.addEventListener('click', startTimer);
  pauseResumeButton.addEventListener('click', pauseResumeTimer);
  endButton.addEventListener('click', endTimer);

  ///according 1
  const accordionIcon = document.querySelector('.accordion-icon');
  const operationDetailsDataDiv = document.getElementById('operationDetailsDataDiv');

  accordionIcon.addEventListener('click', function () {
    operationDetailsDataDiv.classList.toggle('d-block');
  });
  const accordionIconObservations = document.querySelector('#accordionObservationsButton .accordion-icon');
  const observationsDataDiv = document.getElementById('observationsDataDiv');

  accordionIconObservations.addEventListener('click', function () {
    observationsDataDiv.classList.toggle('d-block');
  });
  const jobDetailsContainer = document.getElementById('jobDetails');

  //first table data
  const jobData = projectsData.map(e => e.Jobs[0]);
  const jobElement = document.createElement('div');
  jobElement.classList.add('rowPop');

  jobElement.innerHTML = `
                <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Job Number:</span>
                    <span class="text-sm font-weight-light JobData">${jobData[0].GUID}</span>
                </div>
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Part Number:</span>
                    <span class="text-sm font-weight-light JobData">${jobData[0].JobPathNumber}</span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Customer:</span>
                    <span class="text-sm font-weight-light JobData">${jobData[0].JobPathNumber}</span>
                </div>
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Drawing Number:</span>
                    <span class="text-sm font-weight-light JobData"></span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Quantity:</span>
                    <span class="text-sm font-weight-light JobData"></span>
                </div>
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Current Status:</span>
                    <span class="text-sm font-weight-light JobData"></span>
                </div>
              </div>
    `;
  jobDetailsContainer.appendChild(jobElement);


  const operationDetails = {
    ID: "123",
    quantityCompleted: "456",
    quantityRejected: "789",
    machine: "MachineXYZ",
    machineTechnology: "TechnologyABC",
    allocatedStockID: "StockID123",
    allocatedStockQuantity: "100",
    hopperRecovery: "30",
    buildRecovery: "40"
  };

  function setOperationDetails(data) {
    // Update ID
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(2) .operationDetailsData').textContent = data.ID;

    // Update Quantity Completed
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(4) .operationDetailsData').textContent = data.quantityCompleted;

    // Update Quantity Rejected
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(6) .operationDetailsData').textContent = data.quantityRejected;

    // Update Machine
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(8) .operationDetailsData').textContent = data.machine;

    // Update Machine Technology
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(10) .operationDetailsData').textContent = data.machineTechnology;

    // Update Allocated Stock ID
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(12) .operationDetailsData').textContent = data.allocatedStockID;

    // Update Allocated Stock Quantity
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(14) .operationDetailsData').textContent = data.allocatedStockQuantity;

    // Update Hopper Recovery
    document.querySelector('#operationDetailsDataDiv #hopperRecoveryInput').value = data.hopperRecovery;

    // Update Build Recovery
    document.querySelector('#operationDetailsDataDiv #buildRecoveryInput').value = data.buildRecovery;
  }

  setOperationDetails(operationDetails);



  document.getElementById("observationsDetailSave").addEventListener("click", function () {
    const nameValue = document.getElementById("observationNameInput").value;
    const sampleNumberValue = document.getElementById("observationNumberInput").value;
    const noteValue = document.getElementById("observationNotesInput").value;

    console.log("Name:", nameValue);
    console.log("Sample Number:", sampleNumberValue);
    console.log("Note:", noteValue);

    const urlValue = document.getElementById("observationUrlInput").value;
    console.log("URL:", urlValue);

    const treeValues = getTreeValues();
    console.log("Tree Values:", treeValues);
  });

  function getTreeValues() {
    return [];
  }
});
