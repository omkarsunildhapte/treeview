document.addEventListener("DOMContentLoaded", function () {
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
    const operationsData = Operations;
    const operationsList = document.getElementById("operationsList");
    const startButton = document.getElementById("operationStatusStartButtons");
    const pauseResumeButton = document.getElementById(
        "operationStatusPauseResumeButtons"
    );
    const endButton = document.getElementById("operationEndButtons");
    const timerData = document.getElementById("operationTimerData");
    document.getElementById("faPlay").classList.add("d-block");
    let timerInterval;
    let timerSeconds = 0;
    startButton.addEventListener("click", startTimer);
    pauseResumeButton.addEventListener("click", pauseResumeTimer);
    endButton.addEventListener("click", endTimer);
    const accordionIcon = document.querySelector(".accordion-icon");
    const operationDetailsDataDiv = document.getElementById(
        "operationDetailsDataDiv"
    );
    const accordionIconObservations = document.querySelector(
        "#accordionObservationsButton .accordion-icon"
    );
    const observationsDataDiv = document.getElementById("observationsDataDiv");
    const jobDetailsContainer = document.getElementById("jobDetails");
    const jobData = Jobs[0];
    const jobElement = document.createElement("div");
    jobElement.classList.add("rowPop");
    const operationDetails = {
        ID: "123",
        quantityCompleted: "456",
        quantityRejected: "789",
        machine: "MachineXYZ",
        machineTechnology: "TechnologyABC",
        allocatedStockID: "StockID123",
        allocatedStockQuantity: "100",
        hopperRecovery: "30",
        buildRecovery: "40",
    };
    operationsData.forEach((operation, index) => {
        const operationUI = createOperationUI(operation, index + 1);
        operationsList.appendChild(operationUI);
    });

    function createOperationUI(operation, dotValue) {
        const operationElement = document.createElement("div");
        const lineshow = document.createElement("div");
        operationElement.classList.add("operations-list");

        const listItem = document.createElement("div");
        const dotShow = document.createElement("span");
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
        const line = document.createElement("div");
        line.classList.add("line");
        lineshow.appendChild(line);
        const dotHeight = dotShow.clientHeight / 2;
        const listItemHeight = listItem.clientHeight;
        const lineTop = dotHeight + listItemHeight / 2;
        line.style.top = lineTop + "px";
        return operationElement;
    }

    function updateTimer() {
        const hours = Math.floor(timerSeconds / 3600);
        const minutes = Math.floor((timerSeconds % 3600) / 60);
        const seconds = timerSeconds % 60;
        timerData.textContent = `${hours}:${String(minutes).padStart(
            2,
            "0"
        )}:${String(seconds).padStart(2, "0")}`;
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            timerSeconds++;
            updateTimer();
        }, 1000);
        startButton.style.display = "none";
        pauseResumeButton.style.display = "flex";
        pauseResumeButton.disabled = false;
        endButton.disabled = false;
    }

    function pauseResumeTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
            document.getElementById("faPause").classList.add("d-none");
            document.getElementById("faPlay").classList.remove("d-none");
        } else {
            timerInterval = setInterval(function () {
                timerSeconds++;
                updateTimer();
            }, 1000);
            document.getElementById("faPause").classList.remove("d-none");
            document.getElementById("faPlay").classList.add("d-block");
        }
    }

    function endTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        timerSeconds = 0;
        updateTimer();
        startButton.style.display = "flex";
        pauseResumeButton.style.display = "none";
        endButton.disabled = true;
    }
    accordionIcon.addEventListener("click", function () {
        operationDetailsDataDiv.classList.toggle("d-block");
    });

    accordionIconObservations.addEventListener("click", function () {
        observationsDataDiv.classList.toggle("d-block");
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
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(2) .operationDetailsData"
        ).textContent = data.ID;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(4) .operationDetailsData"
        ).textContent = data.quantityCompleted;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(6) .operationDetailsData"
        ).textContent = data.quantityRejected;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(8) .operationDetailsData"
        ).textContent = data.machine;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(10) .operationDetailsData"
        ).textContent = data.machineTechnology;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(12) .operationDetailsData"
        ).textContent = data.allocatedStockID;
        document.querySelector(
            "#operationDetailsDataDiv .col-3:nth-child(14) .operationDetailsData"
        ).textContent = data.allocatedStockQuantity;
        document.querySelector(
            "#operationDetailsDataDiv #hopperRecoveryInput"
        ).value = data.hopperRecovery;
        document.querySelector(
            "#operationDetailsDataDiv #buildRecoveryInput"
        ).value = data.buildRecovery;
    }

    document
        .getElementById("observationsDetailSave")
        .addEventListener("click", function () {
            const nameValue = document.getElementById("observationNameInput").value;
            const sampleNumberValue = document.getElementById(
                "observationNumberInput"
            ).value;
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
    setOperationDetails(operationDetails);

});
