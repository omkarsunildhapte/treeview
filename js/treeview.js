document.addEventListener("DOMContentLoaded", function () {
  const checkboxDarkLight = document.getElementById("checkboxDarkLight");
  const root = document.documentElement;
  checkboxDarkLight.addEventListener("change", () => {
    if (checkboxDarkLight.checked) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  });
  const projectsData2 = [
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
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      "BarID": "QLVN9E",
      "Name": "3D Printing",
      "TypeID": 1,
      "LVN": 3,
      "CVN": 0,
      "CreatedDate": "06-Nov-23 11:29:51 AM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "aff33340-7265-451b-9017-a0042f6cb66f",
      "BarID": "WVT1WT",
      "Name": "P1",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "14-Nov-23 4:53:51 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      "BarID": "U8WMIS",
      "Name": "P2",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:24 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }, {
      "GUID": "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      "BarID": "N76WFM",
      "Name": "P3",
      "TypeID": 1,
      "LVN": 2,
      "CVN": 0,
      "CreatedDate": "17-Nov-23 2:37:43 PM",
      "SyncStatus": "synced",
      "Status": "Created",
    }
  ]
  const Jobs = [
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
    }, {
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
    }, {
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
    }, {
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
    }
  ]
  const Operations = [
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
  const itemsPerPage = 4;
  let currentPage = 1;
  const projectList = document.getElementById("projectList");
  const operationsData = Operations
  const operationsList = document.getElementById("operationsList");
  const startButton = document.getElementById('operationStatusStartButtons');
  const pauseResumeButton = document.getElementById('operationStatusPauseResumeButtons');
  const endButton = document.getElementById('operationEndButtons');
  const timerData = document.getElementById('operationTimerData');
  document.getElementById('faPlay').classList.add('d-block');
  let timerInterval;
  let timerSeconds = 0;
  startButton.addEventListener('click', startTimer);
  pauseResumeButton.addEventListener('click', pauseResumeTimer);
  endButton.addEventListener('click', endTimer);
  const accordionIcon = document.querySelector('.accordion-icon');
  const operationDetailsDataDiv = document.getElementById('operationDetailsDataDiv');
  const accordionIconObservations = document.querySelector('#accordionObservationsButton .accordion-icon');
  const observationsDataDiv = document.getElementById('observationsDataDiv');
  const jobDetailsContainer = document.getElementById('jobDetails');
  const jobData = Jobs[0];
  const jobElement = document.createElement('div');
  jobElement.classList.add('rowPop');
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

  function createListItem(project) {
    let squareColor = '#1d4ed8';
    const listItem = document.createElement("li");

    listItem.classList.add("d-flex", "flex-column", "justify-content-between");
    listItem.innerHTML = `
    <div class="d-flex justify-content-between border-1 border p-3 gap-0 m-0 text-center align-items-center px-6">
    <div class="accordion-header text-center">
      <span class="fas fa-plus main-body" id='projecticon'></span>
      <i class="fa fa-square project" style="color: ${squareColor};"></i>
      <span class="border-bottom border-dark main-body">${project.BarID
      }</span>
    </div>
    <span class="project-name main-body">${project.Name}</span>
    <span class="project-date main-body">${project.CreatedDate}</span>
    <span class="project-status main-body">${project.Status}</span>
  </div>
      <div>
        <ul class="subproject-list list-unstyled border-0 border" style="display:none; padding:0px" id='jobTable'>
          ${Jobs.map(job => createJobListItem(job).outerHTML).join('')}
        </ul>
      </div>
    `;

    const projectIcon = listItem.querySelector('#projecticon');
    const subprojectContainer = listItem.querySelector('.subproject-list');
    projectIcon.addEventListener('click', () => {
      projectIcon.classList.toggle('fa-plus');
      debugger
      projectIcon.classList.toggle('fa-minus');
      subprojectContainer.classList.toggle('d-block');
    });
    return listItem;
  }

  function createJobListItem(job) {
    let squareColor = '#a21caf';
    const listItem1 = document.createElement("li");
    listItem1.innerHTML = `
    <div class="d-flex flex-column border-1 border px-7">
    <div class="d-flex justify-content-between p-3 gap-0 m-0 accordion-header1">
      <div class="accordion-header gap-2 d-flex justify-content-center">
        <span class="fas fa-plus main-body" id='projecticon'></span>
        <i class="fa fa-square project" style="color: ${squareColor};"></i>
        <span class="main-body border-bottom border-dark">${job.BarID
      }</span>
      </div>
      <span class="text-center job-name main-body">${job.Name}</span>
      <span class="text-center job-date main-body">${job.CreatedDate}</span>
      <span class="text-center job-status main-body">${job.Status}</span>
    </div>
        <div>
          <ul class="operation-list border-0 border" style="display:none">
            ${Operations.map(operation => createOperationListItem(operation).outerHTML).join('')}
          </ul>
        </div>
      </div>
    `;
    const projectIcon = listItem1.querySelector('#projecticon');
    const subprojectContainer = listItem1.querySelector('.operation-list');
    projectIcon.addEventListener('click', () => {
      projectIcon.classList.toggle('fa-plus');
      projectIcon.classList.toggle('fa-minus');
      subprojectContainer.classList.toggle('d-block');
    });
    return listItem1;
  }

  function createOperationListItem(operation) {
    let squareColor = '#4d7c0f';
    const listItem2 = document.createElement("li");

    listItem2.innerHTML = `
      <li class="list-group-item">
        <div class="d-flex justify-content-between border-1 border p-3 gap-0 m-0">
          <i class="fa fa-square project" style="color: ${squareColor};"></i>
          <span class="border-bottom  main-bodyborder-dark">${operation.BarID}</span>
          <span class="operation-name main-body">${operation.Name}</span>
          <span class="operation-date main-body">${operation.CreatedDate}</span>
          <span class="operation-status main-body">${operation.Status}</span>
        </div>
      </li>
    `;
    return listItem2;
  }

  function addProjectsToList(data) {
    projectList.innerHTML = "";
    data.forEach(project => {
      const listItem = createListItem(project);
      projectList.appendChild(listItem);
    });
  }

  function updatePagination() {
    const totalItems = projectsData2.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationElement = document.getElementById('paginationProjects');
    paginationElement.innerHTML = '';

    function addPageLink(pageNumber) {
      const li = document.createElement('li');
      li.classList.add('page-item');

      const a = document.createElement('a');
      a.classList.add('page-link');
      a.href = '#';
      a.innerText = pageNumber;

      if (pageNumber === currentPage) {
        li.classList.add('active');
        a.style.backgroundColor = '#007bff';
        a.style.color = '#fff'
      } else {
        a.style.color = '#000'
      }

      a.addEventListener('click', () => {
        currentPage = pageNumber;
        initializePage();
      });

      li.appendChild(a);
      paginationElement.appendChild(li);
    }


    function addNavigationButton(text, page, callback, isDisabled) {
      const li = document.createElement('li');
      li.classList.add('page-item');

      if (isDisabled) {
        li.classList.add('disabled');
      }

      const a = document.createElement('a');
      a.classList.add('page-link', 'text-white');
      a.href = '#';
      a.innerHTML = text;
      a.style.backgroundColor = isDisabled ? '#d6d6d6' : '#007bff';
      a.style.cursor = isDisabled ? 'not-allowed' : 'pointer';

      if (!isDisabled) {
        a.addEventListener('click', () => {
          callback();
        });
      }

      li.appendChild(a);
      paginationElement.appendChild(li);
    }

    // Add "First" button
    addNavigationButton('&laquo;', 1, () => {
      currentPage = 1;
      initializePage();
    }, currentPage === 1);

    // Add "Previous" button
    addNavigationButton('<', currentPage - 1, () => {
      if (currentPage > 1) {
        currentPage--;
        initializePage();
      }
    }, currentPage === 1);

    // Add page links
    const maxVisiblePages = 3;
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      addPageLink(i);
    }

    // Add "Next" button
    addNavigationButton('>', currentPage + 1, () => {
      if (currentPage < totalPages) {
        currentPage++;
        initializePage();
      }
    }, currentPage === totalPages);

    // Add "Last" button
    addNavigationButton('&raquo;', totalPages, () => {
      currentPage = totalPages;
      initializePage();
    }, currentPage === totalPages);
  }

  function initializePage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, projectsData2.length);
    addProjectsToList(projectsData2.slice(startIndex, endIndex));
    updatePagination();
  }

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
              <p class='fw-bold m-0'>${operation.Name}</p>
              <p class='m-0'>Starting Date: ${operation.StartTime}</p>
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
  accordionIcon.addEventListener('click', function () {
    operationDetailsDataDiv.classList.toggle('d-block');
  });

  accordionIconObservations.addEventListener('click', function () {
    observationsDataDiv.classList.toggle('d-block');
  });

  jobElement.innerHTML = `
                <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Job Number:</span>
                    <span class="text-sm font-weight-light JobData">${jobData.GUID}</span>
                </div>
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Part Number:</span>
                    <span class="text-sm font-weight-light JobData">${jobData.JobPathNumber}</span>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6 mb-2">
                    <span class="text-sm font-weight-normalBold">Customer:</span>
                    <span class="text-sm font-weight-light JobData">${jobData.JobPathNumber}</span>
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

  function setOperationDetails(data) {
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(2) .operationDetailsData').textContent = data.ID;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(4) .operationDetailsData').textContent = data.quantityCompleted;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(6) .operationDetailsData').textContent = data.quantityRejected;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(8) .operationDetailsData').textContent = data.machine;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(10) .operationDetailsData').textContent = data.machineTechnology;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(12) .operationDetailsData').textContent = data.allocatedStockID;
    document.querySelector('#operationDetailsDataDiv .col-3:nth-child(14) .operationDetailsData').textContent = data.allocatedStockQuantity;
    document.querySelector('#operationDetailsDataDiv #hopperRecoveryInput').value = data.hopperRecovery;
    document.querySelector('#operationDetailsDataDiv #buildRecoveryInput').value = data.buildRecovery;
  }

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

  initializePage();
  setOperationDetails(operationDetails);
});
