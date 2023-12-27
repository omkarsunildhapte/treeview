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
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "QLVN9E",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "WVT1WT",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "U8WMIS",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "N76WFM",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "QLVN7F",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "WVT1WX",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "U8WMPS",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "N76WFR",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "QLJN9E",
      Name: "3D Printing second",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "VVT1WT",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "UWPM9S",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "K99WFM",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "QYVN2R",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "WVT2W2",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "U8W8I8",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "N767F7",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "LLVN9L",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "VVT1VT",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "R0WPSI",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "N00WFM",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "QLNNNE",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "T1T11T",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "DGFHUY",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "DDW78A",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "bcc8c279-2a4f-481f-ac8e-79dc4207acba",
      BarID: "EOEE39",
      Name: "3D Printing",
      TypeID: 1,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:29:51 AM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "aff33340-7265-451b-9017-a0042f6cb66f",
      BarID: "QASAAS",
      Name: "P1",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "14-Nov-23 4:53:51 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "a6e71bcd-8204-484a-8157-3e4abed5bcb5",
      BarID: "AAP505",
      Name: "P2",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:24 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
    {
      GUID: "ae3b52b4-5402-4637-95fd-477b6ef57de1",
      BarID: "TES57H",
      Name: "P3",
      TypeID: 1,
      LVN: 2,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:37:43 PM",
      SyncStatus: "synced",
      Status: "Created",
    },
  ];
  const Jobs = [
    {
      GUID: "cfb13e1c-cda2-4d38-9d8d-bcd16676c9ec",
      BarID: "PL3DSC",
      Name: "Job 3",
      TypeID: 2,
      LVN: 1,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:47:56 PM",
      SyncStatus: "synced",
      Status: "Created",
      JobPathNumber: "",
      MaterialSpec: "",
      Quantity: 0,
    },
    {
      GUID: "999f2460-6617-4368-9785-49906e26f908",
      BarID: "7IY9EP",
      Name: "J2",
      TypeID: 2,
      LVN: 1,
      CVN: 0,
      CreatedDate: "17-Nov-23 2:47:41 PM",
      SyncStatus: "synced",
      Status: "Created",
      JobPathNumber: "",
      MaterialSpec: "",
      Quantity: 0,
    },
    {
      GUID: "b6788070-ce0e-4a87-a41d-f95dfd5fdf8b",
      BarID: "Y9D1OM",
      Name: "Job 1",
      TypeID: 2,
      LVN: 1,
      CVN: 0,
      CreatedDate: "14-Nov-23 5:18:11 PM",
      SyncStatus: "synced",
      Status: "Created",
      JobPathNumber: "",
      MaterialSpec: "",
      Quantity: 0,
    },
    {
      GUID: "5f8a4127-22e3-4ae0-bee8-6d2a90aa93fc",
      BarID: "B0KEPO",
      Name: "3D Build",
      TypeID: 2,
      LVN: 3,
      CVN: 0,
      CreatedDate: "06-Nov-23 11:30:07 AM",
      SyncStatus: "synced",
      Status: "Created",
      JobPathNumber: "",
      MaterialSpec: "",
      Quantity: 10,
    },
  ];
  const Operations = [
    {
      GUID: "c8f870cf-48b9-4cf7-8e38-bf3b8eb9133e",
      BarID: "AV9XLW",
      Name: "Issue Material",
      TypeID: 3,
      LVN: 1,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Created",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 0,
      BuildRecovery: 0,
      StartTime: "17-Nov-23 2:47:56 PM",
      EndTime: "17-Nov-23 2:47:56 PM",
      TimeSpent: "0:0:0",
      IsDone: false,
      InProgress: false,
      OperationType: "StockRecovery",
    },
    {
      GUID: "5a4f5631-ced3-4a45-9b68-83464a3d07df",
      BarID: "ZU7AK4",
      Name: "Issue Material",
      TypeID: 3,
      LVN: 1,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Created",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 0,
      BuildRecovery: 0,
      StartTime: "17-Nov-23 2:47:49 PM",
      EndTime: "17-Nov-23 2:47:49 PM",
      TimeSpent: "0:0:0",
      IsDone: false,
      InProgress: false,
      OperationType: "StockRecovery",
    },
    {
      GUID: "a2fd6630-a971-4f69-9659-0b19c4d7900f",
      BarID: "6AIOZ0",
      Name: "Issue Material",
      TypeID: 3,
      LVN: 10,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "WorkInProgress",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 0,
      BuildRecovery: 0,
      StartTime: "16-Nov-23 3:30:08 PM",
      EndTime: "14-Nov-23 5:18:28 PM",
      TimeSpent: "0:0:40",
      IsDone: false,
      InProgress: true,
      OperationType: "StockRecovery",
    },
    {
      GUID: "590807be-8a4d-4a08-850f-47c5a5f6fc20",
      BarID: "2Y829T",
      Name: "Additive MFG",
      TypeID: 3,
      LVN: 8,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Processed",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 10,
      BuildRecovery: 20,
      StartTime: "14-Nov-23 5:15:02 PM",
      EndTime: "14-Nov-23 5:16:23 PM",
      TimeSpent: "0:0:12",
      IsDone: true,
      InProgress: true,
      OperationType: "Build",
    },
    {
      GUID: "590807be-8a4d-4a08-850f-47c5a5f6fc20",
      BarID: "2Y829T",
      Name: "Additive MFG",
      TypeID: 3,
      LVN: 8,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Processed",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 10,
      BuildRecovery: 20,
      StartTime: "14-Nov-23 5:15:02 PM",
      EndTime: "14-Nov-23 5:16:23 PM",
      TimeSpent: "0:0:12",
      IsDone: true,
      InProgress: true,
      OperationType: "Build",
    },
  ];
  const Tasks = [
    {
      GUID: "c8f870cf-48b9-4cf7-8e38-bf3b8eb9133e",
      BarID: "AAABB",
      Name: "Task 1",
      TypeID: 3,
      LVN: 1,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Created",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 0,
      BuildRecovery: 0,
      StartTime: "17-Nov-23 2:47:56 PM",
      EndTime: "17-Nov-23 2:47:56 PM",
      TimeSpent: "0:0:0",
      IsDone: false,
      InProgress: false,
      TaskType: "Test1",
    },
    {
      GUID: "5a4f5631-ced3-4a45-9b68-83464a3d07df",
      BarID: "BBCDD",
      Name: "Task 2",
      TypeID: 3,
      LVN: 1,
      CVN: 0,
      CreatedDate: "22-Nov-23 9:34:33 AM",
      SyncStatus: "synced",
      Status: "Created",
      Quantity: 0,
      QuantityCompleted: 0,
      QuantityRejected: 0,
      HopperRecovery: 0,
      BuildRecovery: 0,
      StartTime: "17-Nov-23 2:47:49 PM",
      EndTime: "17-Nov-23 2:47:49 PM",
      TimeSpent: "0:0:0",
      IsDone: false,
      InProgress: false,
      TaskType: "Test2",
    },
  ];

  const itemsPerPage = 4;
  let currentPage = 1;
  const projectList = document.getElementById("projectList");

  function createListItem(project) {
    let squareColor = "#1d4ed8";
    const listItem = document.createElement("li");
    listItem.classList.add("m-0", "p-0", "border-bottom", "border-1");
    listItem.innerHTML = `
    <div class="row py-3 gap-0 m-0 text-center" id="project-hightlight-${project.BarID}">
      <div class="accordion-header col-3 col-md-2 d-flex justify-content-center gap-1 text-center">
        <span class="fas  fa-plus main-body" id='projecticon-${project.BarID}' onclick='projectIconClicked("${project.BarID}")' style="cursor:pointer"></span>
        <i class="fa  fa-square project" style="color: ${squareColor};"></i>
        <span class=" main-body">${project.BarID}</span>
      </div>
      <span class="project-name col-3 col-md-3 main-body">${project.Name}</span>
      <span class="project-date col-3 col-md-3 main-body">${project.CreatedDate}</span>
      <span class="project-status col-3 col-md-2 main-body">${project.Status}</span>
    </div>
      <div>
        <ul class="subproject-list-${project.BarID} row list-unstyled m-0 p-0 text-center" style="display:none;" id='jobTable'>
          ${Jobs.map((job) => createJobListItem(job, project.BarID).outerHTML).join("")}
        </ul>
      </div>
    `;
    return listItem;
  }

  function createJobListItem(job, projectid_for_job) {
    let squareColor = "#a21caf";
    const listItem1 = document.createElement("li");
    listItem1.classList.add("m-0", "p-0", "border-top", "border-1");
    listItem1.innerHTML = `
      <div class="row py-3 col-12 m-0">
        <div class="accordion-header col-3 col-md-2 d-flex justify-content-center gap-1">
          <span class="fas fa-plus main-body" id='jobicon-${job.BarID}-${projectid_for_job}' onclick='jobIconClicked("${job.BarID}-${projectid_for_job}")' style="cursor:pointer"></span>
          <i class="fa fa-square project" style="color: ${squareColor};"></i>
          <span class="main-body">${job.BarID}</span>
        </div>
        <span class="col-3 col-md-3 job-name main-body">${job.Name}</span>
        <span class="col-3 col-md-3 job-date main-body">${job.CreatedDate}</span>
        <span class="col-3 col-md-2 job-status main-body">${job.Status}</span>
      </div>
      <div> 
        <ul class="row list-unstyled m-0 text-center subjob-list-${job.BarID}-${projectid_for_job}" style="display:none; padding:0px">
          ${Operations.map((operation) => createOperationListItem(operation, job.BarID, projectid_for_job).outerHTML).join("")}
        </ul>
      </div>
    `;

    return listItem1;
  }

  function createOperationListItem(operation, job_id_for_operation, projectid_for_task) {
    let squareColor = "#4d7c0f";
    const listItem2 = document.createElement("li");
    listItem2.classList.add("m-0", "p-0", "border", "border-1");
    listItem2.innerHTML = `
      <div class="row py-3 gap-0 m-0 accordion-header p-0 ">
        <div class="accordion-header col-3 col-md-2 text-center d-flex justify-content-center gap-1">
          <span class='fas fa-plus main-body'  id='taskicon-${operation.BarID}-${job_id_for_operation}-${projectid_for_task}' style='cursor:pointer;' onclick='taskIconClicked("${operation.BarID
      }-${job_id_for_operation}-${projectid_for_task}")'></span>
          <i class="fa fa-square project" style="color: ${squareColor};"></i>
          <span class="main-body">${operation.BarID}</span>
        </div>
        <span class="operation-name col-3 col-md-3 main-body">${operation.Name}</span>
        <span class="operation-date col-3 col-md-3 main-body">${operation.CreatedDate}</span>
        <span class="operation-status col-3 col-md-2 main-body">${operation.Status}</span>
      </div>
      <div> 
        <ul class="border-1border subtask-list-${operation.BarID}-${job_id_for_operation}-${projectid_for_task}" style="display:none; padding:0px;list-style:none;">
          ${Tasks.map((task) => createTaskListItem(task).outerHTML).join("")}
        </ul>
      </div>
    `;

    return listItem2;
  }

  function createTaskListItem(task) {
    let listItem3 = document.createElement("li");
    listItem3.classList.add("m-0", "p-0", "border", "border-1");
    listItem3.innerHTML = `
        <div class="row py-3 gap-0 m-0 accordion-header p-0 1">
          <div class="accordion-header col-3 col-md-2 text-center">
            <i class="fa fa-square project main-body" style="color:#fde047;"></i>
            <span class="main-body border-dark">${task.BarID}</span>
          </div>
        <span class="task-name col-3 col-md-3 main-body">${task.Name}</span>
        <span class="task-date col-3 col-md-3 main-body">${task.CreatedDate}</span>
        <span class="task-status col-3 col-md-2 main-body">${task.Status}</span>
        </div>
      `;
    return listItem3;
  }

  function addProjectsToList(data) {
    projectList.innerHTML = "";
    data.forEach((project) => {
      const listItem = createListItem(project);
      projectList.appendChild(listItem);
    });
  }

  function updatePagination() {
    const totalItems = projectsData2.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationElement = document.getElementById("paginationProjects");
    paginationElement.innerHTML = "";

    function addPageLink(pageNumber) {
      const li = document.createElement("li");
      li.classList.add("page-item");

      const a = document.createElement("a");
      a.classList.add("page-link");
      a.href = "#";
      a.innerText = pageNumber;

      if (pageNumber === currentPage) {
        li.classList.add("active");
        a.style.backgroundColor = "#007bff";
        a.style.color = "#fff";
      } else {
        a.style.color = "#000";
      }

      a.addEventListener("click", () => {
        currentPage = pageNumber;
        initializePage();
      });

      li.appendChild(a);
      paginationElement.appendChild(li);
    }

    function addNavigationButton(text, page, callback, isDisabled) {
      const li = document.createElement("li");
      li.classList.add("page-item");

      if (isDisabled) {
        li.classList.add("disabled");
      }

      const a = document.createElement("a");
      a.classList.add("page-link", "text-white");
      a.href = "#";
      a.innerHTML = text;
      a.style.backgroundColor = isDisabled ? "#d6d6d6" : "#007bff";
      a.style.cursor = isDisabled ? "not-allowed" : "pointer";

      if (!isDisabled) {
        a.addEventListener("click", () => {
          callback();
        });
      }

      li.appendChild(a);
      paginationElement.appendChild(li);
    }

    // Add "First" button
    addNavigationButton(
      "&laquo;",
      1,
      () => {
        currentPage = 1;
        initializePage();
      },
      currentPage === 1
    );

    // Add "Previous" button
    addNavigationButton(
      "<",
      currentPage - 1,
      () => {
        if (currentPage > 1) {
          currentPage--;
          initializePage();
        }
      },
      currentPage === 1
    );

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
    addNavigationButton(
      ">",
      currentPage + 1,
      () => {
        if (currentPage < totalPages) {
          currentPage++;
          initializePage();
        }
      },
      currentPage === totalPages
    );

    // Add "Last" button
    addNavigationButton(
      "&raquo;",
      totalPages,
      () => {
        currentPage = totalPages;
        initializePage();
      },
      currentPage === totalPages
    );
  }

  function initializePage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(currentPage * itemsPerPage, projectsData2.length);
    addProjectsToList(projectsData2.slice(startIndex, endIndex));
    updatePagination();
  }
  initializePage();
});

// added two function for dislya the list

// this is for project click
function projectIconClicked(id) {
  projectIcon = document.querySelector(`#projecticon-${id}`);
  projectHighlight = document.querySelector(`#project-hightlight-${id}`);
  // console.log(projectIcon);
  const subprojectContainer = document.querySelector(`.subproject-list-${id}`);
  // console.log(subprojectContainer);
  projectIcon.classList.toggle("fa-plus");
  projectIcon.classList.toggle("fa-minus");
  if (document.documentElement.classList.contains("dark-mode")) {
    console.log("dark is present");
    projectHighlight.classList.toggle("dark-grey-highlight");
  } else {
    // console.log("dark is not present");
    projectHighlight.classList.toggle("light-grey-highlight");
  }
  subprojectContainer.classList.toggle("d-block");
}

// this is for job click
function jobIconClicked(id) {
  // console.log(id);
  jobIcon = document.querySelector(`#jobicon-${id}`);
  // console.log(jobIcon);
  const subJobContainer = document.querySelector(`.subjob-list-${id}`);
  // console.log(subJobContainer);
  jobIcon.classList.toggle("fa-plus");
  jobIcon.classList.toggle("fa-minus");
  subJobContainer.classList.toggle("d-block");
}

// this is for operation click
function taskIconClicked(id) {
  // console.log(id);
  taskIcon = document.querySelector(`#taskicon-${id}`);
  // console.log(taskIcon);
  const subTaskContainer = document.querySelector(`.subtask-list-${id}`);
  // console.log(subTaskContainer);
  taskIcon.classList.toggle("fa-plus");
  taskIcon.classList.toggle("fa-minus");
  subTaskContainer.classList.toggle("d-block");
}
