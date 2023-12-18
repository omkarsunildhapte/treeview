document.addEventListener("DOMContentLoaded", function () {
    const accordionProjects = document.getElementById("accordionProjects");
    const JobData = document.querySelectorAll(".JobData");
    const JobPanel = document.getElementById("JobPanel");
    const titlebarClose = document.getElementById("titlebar-close");
    const operationsDiv = document.getElementById("operationsDiv");
    const observationsDetailSave = document.getElementById("observationsDetailSave");
    const observationNameInput = document.getElementById("observationNameInput");
    const observationNumberInput = document.getElementById("observationNumberInput");
    const digitalAddFolderButton = document.getElementById("digitalAddFolderButton");
    const observationNotesInput = document.getElementById("observationNotesInput");
    const digitalAddUrlContainer = document.querySelector(".digitalAddUrlContainer");
    const digitalAddUrlButton = document.getElementById("digitalAddUrlButton");
    const observationUrlInput = document.getElementById("observationUrlInput");
    const operationDetailsDataDiv = document.getElementById("operationDetailsDataDiv");
    const accordionOperationButton = document.getElementById("accordionOperationButton");
    const accordionObservationsButton = document.getElementById("accordionObservationsButton");
    const observationsDataDiv = document.getElementById("observationsDataDiv");
    const operationStatusStartButtons = document.getElementById("operationStatusStartButtons");
    const operationStatusPauseResumeButtons = document.getElementById("operationStatusPauseResumeButtons");
    const operationStartButtonContainer = document.getElementById("operationStartButtonContainer");
    const operationPauseResumeButtonContainer = document.getElementById("operationPauseResumeButtonContainer");
    const operationTimerData = document.getElementById("operationTimerData");
    const startButtonText = operationStatusStartButtons.querySelector("span");
    const pauseResumeButtonText = operationStatusPauseResumeButtons.querySelector("span");
    const operationEndButtons = document.getElementById("operationEndButtons");
    const operationDetailsData = document.querySelectorAll(".operationDetailsData");
    const operationDetailsDiv = document.getElementById("operationDetailsDiv");
    const treeElement = document.getElementById("tree");
    const menuElement = document.getElementById("contextmenu");
    const stockRecoveryDiv = document.getElementById("stockRecoveryDiv");
    const hopperRecoveryInput = document.getElementById("hopperRecoveryInput");
    const buildRecoveryInput = document.getElementById("buildRecoveryInput");
    const operationName = document.getElementById("operationName");
    const barcodeCameraDiv = document.getElementById("barcodeCameraDiv");
    const barcodeCameraBtn = document.getElementById("barcodeCameraBtn");
    const barcodeClose = document.getElementById("barcodeClose");

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

    //===> LIVE TIMER VARIABLES <===
    let startTime;
    let timerInterval;
    let totalElapsedTime = 0;
    let timerData = 0;

    // ===> SYNCFUSION  VARIABLES <===
    var isInitialized = false; // Flag to check if menu and data have been initialized
    var data = [];
    var renamedTxt = "";
    // Render the context menu with target as TreeView
    var menuItems = [
        { text: "Add New SubFolder" },
        { text: "Add URL" },
        { text: "Upload" },
        { text: "Rename" },
        { text: "Delete" },
    ];
    var treeObj = [];
    let entitiesListSize = [];

    //====> DARK AND LIGHT THEME BUTTON <====
    const checkboxDarkLight = document.getElementById("checkboxDarkLight");
    const root = document.documentElement;
    checkboxDarkLight.addEventListener("change", () => {
        asyncDivOk.refreshData();
        clearAccordionProjects();
        if (checkboxDarkLight.checked) {
            root.classList.add("dark-mode");
        } else {
            root.classList.remove("dark-mode");
        }
    });

    let projectsTabAccordionIdCounter = 0;

    function setProjectsTabAccordionIdCounter() {
        projectsTabAccordionIdCounter += 1;
    }

    function asyncDivOk(cb) {
        function fetchData() {
            console.time("myTimer");

            window.sdfcData?.getData().then(function (data) {
                console.timeEnd("myTimer");

                cb(data);
            });
        }

        // Function to manually refresh the data
        function refreshData() {
            fetchData();
        }

        // Expose the refreshData function to the outside
        asyncDivOk.refreshData = refreshData;

        // Initial data fetch
        fetchData();
    }

    function clearAccordionProjects() {
        while (accordionProjects.firstChild) {
            accordionProjects.removeChild(accordionProjects.firstChild);
        }
    }

    asyncDivOk((res) => {
        console.log("Entering Asyncdiv!!");
        console.time("myTimer");
        console.log("asyncDivOk  => ", res);

        let jsonString = [];
        jsonString = JSON.parse(res);
        console.log("Dynamic Json String Data Parse => ", jsonString);
        entitiesListSize = [];

        jsonString.forEach((item) => {
            let jsonString = [];

            jsonObject = JSON.parse(item);

            console.log("Dynamic Json Data Object => ", jsonObject);
            console.log("Dynamic Name Item => ", jsonObject["Name"]);
            let entity = [];
            entity = new Entity(jsonObject);
            entitiesListSize.push(entity);
            console.log("Project Data parse => ", entity);
        });

        function Entity(data) {
            this.data = data;
            this.guid = data.GUID;
            this.barId = data.BarID;
            this.name = data.Name;
            this.typeId = data.TypeID;
            this.status = data.Status;
            this.lvn = data.LVN;
            this.cvn = data.CVN;
            this.createdDate = data.CreatedDate;
            this.syncStatus = data.SyncStatus;
            this.outerDivClasses = [
                "accordion-item",
                "border-bottom",
                "pb-1",
                "my-1",
            ];
            this.parentDivClasses = ["row"];
            this.parentAccordionButtonClasses = [
                "accordion-button",
                "w-100",
                "collapsed",
            ];
            this.childDivClasses = ["accordion-collapse", "collapse"];
            this.childDivBodyClasses = ["accordion-body", "p-0"];
            this.pTagClasses = [
                "text-center",
                "text-sm",
                "font-weight-normal",
                "m-0",
            ];
            this.titleContentClasses = ["row", "col-12"];
            this.iconDivClasses = [
                "pe-3",
                "col-1",
                "d-flex",
                "flex-column",
                "justify-content-center",
                "align-items-center",
            ];
            this.textDivClasses = [
                "d-flex",
                "flex-row",
                "justify-content-start",
                "overflow-x-scroll",
                "customScrollbar",
            ];
            this.traceButtonClasses = ["btn", "bg-gradient-info", "m-0"];
            this.timer = null;
            this.prevent = false;
            this.namePadding = undefined;
            this.children = [];
        }

        Entity.prototype.createOuterDiv = function () {
            const div = document.createElement("div");
            this.outerDivClasses.forEach((c) => div.classList.add(c));
            div.setAttribute("data-guid", this.guid);
            return div;
        };

        Entity.prototype.createParentDiv = function () {
            const div = document.createElement("div");
            div.classList.add("accordion-header");
            div.appendChild(this.createParentButton());
            this.outerDiv.appendChild(div);
            return div;
        };

        Entity.prototype.createParentButton = function (entity) {
            const div = document.createElement("div");
            this.parentDivClasses.forEach((c) => div.classList.add(c));
            const button = document.createElement("button");
            this.parentAccordionButtonClasses.forEach((c) => button.classList.add(c));
            button.type = "button";
            const uniqueId = "accordion_" + projectsTabAccordionIdCounter.toString();
            button.setAttribute("data-bs-target", "#" + uniqueId);
            button.setAttribute("aria-expanded", "aria-expanded");
            button.setAttribute("aria-controls", uniqueId);

            //button.onclick = this.createChildDiv.bind(this);
            button.onclick = function () {
                this.createChildDiv(uniqueId);
                this.rotateArrow();
            }.bind(this);

            button.ondblclick = this.handleDoubleClick.bind(this);
            button.appendChild(this.createTitleContent(entity));
            div.appendChild(button);
            return div;
        };

        Entity.prototype.createChildDiv = function (uniqueId) {
            console.log("createChildDiv", this.name);

            if (!this.childDiv) {
                const div = document.createElement("div");
                this.childDivClasses.forEach((c) => div.classList.add(c));
                const body = document.createElement("div");
                this.childDivBodyClasses.forEach((c) => body.classList.add(c));
                div.id = uniqueId; // Use the uniqueId as the div id
                setProjectsTabAccordionIdCounter();

                if (this.typeId == 2) {
                    //==child data operation <===
                    window.sdfcData
                        ?.getChildDataRelatedToJob(this.guid)
                        .then(function (childDataOperation) {
                            console.log(
                                "Childs related to selected project",
                                childDataOperation
                            );
                            // Check if childData is not empty
                            if (childDataOperation) {
                                try {
                                    //  parse the JSON data
                                    var jsonDataOperation = JSON.parse(childDataOperation);

                                    //  jsonData is an array, you can iterate over it
                                    jsonDataOperation.forEach(function (result) {
                                        // Extract result data and send it to createChildDiv
                                        var resultData = result.Result;
                                        var resultObject = JSON.parse(resultData);
                                        console.log(
                                            "Childs related to selected project resultObject",
                                            resultObject
                                        );
                                        const subOperationEntity = new Entity(resultObject);
                                        const subOperationOuterDiv =
                                            subOperationEntity.getOuterDiv();
                                        body.appendChild(subOperationOuterDiv);
                                    });
                                } catch (error) {
                                    console.error("Error parsing JSON:", error);
                                }
                            } else {
                                console.log("childData is empty.");
                            }
                        })
                        .catch(function (error) {
                            console.error("Error fetching child data:", error);
                        });
                }

                if (this.typeId == 1) {
                    //==child data job <===
                    window.sdfcData
                        ?.getChildDataRelatedToProject(this.guid)
                        .then(function (childDataJob) {
                            console.log("Childs related to selected project", childDataJob);

                            // Check if childData is not empty
                            if (childDataJob) {
                                try {
                                    //  parse the JSON data
                                    var jsonDataJob = JSON.parse(childDataJob);

                                    //  jsonData is an array, you can iterate over it
                                    jsonDataJob.forEach(function (result) {
                                        // Extract result data and send it to createChildDiv
                                        var resultData = result.Result;
                                        var resultObject = JSON.parse(resultData);
                                        console.log(
                                            "Childs related to selected project resultObject",
                                            resultObject
                                        );
                                        const subjobEntity = new Entity(resultObject);
                                        const subjobOuterDiv = subjobEntity.getOuterDiv();
                                        body.appendChild(subjobOuterDiv);
                                    });
                                } catch (error) {
                                    console.error("Error parsing JSON:", error);
                                }
                            } else {
                                console.log("childData is empty.");
                            }
                        })
                        .catch(function (error) {
                            console.error("Error fetching child data:", error);
                        });
                }
                div.appendChild(body);
                this.outerDiv.appendChild(div);
                this.childDiv = div;
            }
            return this.childDiv;
        };

        Entity.prototype.createTitleContent = function (entity) {
            const div = document.createElement("div");
            this.titleContentClasses.forEach((c) => div.classList.add(c));
            const a = this.createTextDiv(this.barId, "col-2", true);
            a.prepend(this.identifierDiv());
            a.prepend(this.dropdownButton());
            a.style.textDecoration = "underline";
            a.classList.add("custom-link");

            //====> TODO - onClick open Trace
            a.addEventListener("click", () => {
                console.log("Link clicked:" + this.name); // Log the clicked link
                this.handleTraceButtonClick();
            });

            div.appendChild(a);
            div.appendChild(this.createTextDiv(this.name, "col-5", false));
            div.appendChild(this.createTextDiv(this.createdDate, "col-3", false));
            div.appendChild(this.createTextDiv(this.status, "col-2", false));
            return div;
        };

        Entity.prototype.rotateArrow = function () {
            this.timer = setTimeout(() => {
                if (!this.prevent) {
                    (this.parentDiv.firstChild?.firstChild).setAttribute(
                        "data-bs-toggle",
                        "collapse"
                    );
                    (this.parentDiv.firstChild?.firstChild).click();
                    (this.parentDiv.firstChild?.firstChild).click();
                    const button = this.parentDiv.querySelector("button");
                    button.disabled = true;
                    const svg = this.outerDiv.querySelector("svg");
                    if (svg) {
                        if (svg.style.transform == "rotate(180deg)") {
                            svg.style.transform = "rotate(0deg)";
                            this.parentDiv.style.backgroundColor = "#e9ecef";
                            this.childDiv.style.backgroundColor = "#f8f9fa";
                            this.outerDiv.style.borderRadius = "10px";
                            this.outerDiv.style.outline = "0.1px solid #dee2e6";
                        } else {
                            svg.style.transform = "rotate(180deg)";
                            this.parentDiv.style.backgroundColor = "";
                            this.childDiv.style.backgroundColor = "";
                            this.outerDiv.style.borderRadius = "";
                            this.outerDiv.style.outline = "";
                        }
                    }
                    (this.parentDiv.firstChild?.firstChild).removeAttribute(
                        "data-bs-toggle"
                    );
                    setTimeout(() => {
                        button.disabled = false;
                    }, 360);
                }
                this.prevent = false;
            }, 200);
        };

        Entity.prototype.handleDoubleClick = function () {
            clearTimeout(this.timer);
            this.prevent = true;
            if (this.typeId == 2) {
                operationsDiv.classList.remove("d-none");

                titlebarClose.addEventListener("click", function () {
                    operationsDiv.classList.add("d-none");
                    observationsDataDiv.classList.add("d-none");
                    operationDetailsDiv.classList.add("d-none");
                    observationsDetailSave.classList.add("d-none");
                    operationDetailsDataDiv.classList.add("d-none");
                    clearInterval(timerInterval);
                });

                console.log("handleDoubleClick" + this.data.Name);

                const a = [
                    this.barId,
                    "Part number",
                    "Customer",
                    "Drawing number",
                    this.data.Quantity,
                    this.status,
                ];
                JobData.forEach((item, index) => (item.innerHTML = a[index]));
                this.getOperationsData();
            } else {
                console.log("not a job");
            }
        };

        Entity.prototype.dropdownButton = function () {
            const div = document.createElement("div");
            this.iconDivClasses.forEach((c) => div.classList.add(c));
            const i = document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-angle-up");
            i.style.transition = "all 0.360s ease-in-out";
            i.style.transform = "rotate(180deg)";
            div.appendChild(i);
            return div;
        };

        Entity.prototype.identifierDiv = function () {
            const div = document.createElement("div");
            this.iconDivClasses.forEach((c) => div.classList.add(c));
            const i = document.createElement("i");
            i.classList.add("fa");
            i.classList.add("fa-square");
            i.classList.add(this.getIconColor());
            div.appendChild(i);
            return div;
        };

        Entity.prototype.getIconColor = function () {
            if (this.typeId == 1) return "project";
            else if (this.typeId == 2) return "job";
            else if (this.typeId == 3) return "operation";
            else if (this.typeId == 25) return "task";
            return "black";
        };

        Entity.prototype.createTextDiv = function (text, c, indentation) {
            const div = document.createElement("div");
            div.classList.add(c);
            this.textDivClasses.forEach((c) => div.classList.add(c));
            const p = document.createElement("p");
            this.pTagClasses.forEach((c) => p.classList.add(c));
            p.innerHTML = text;
            p.style.whiteSpace = "nowrap";
            if (indentation) {
                div.style.paddingLeft = this.namePadding + "px";
                p.classList.remove("text-center");
            }
            div.appendChild(p);
            return div;
        };

        Entity.prototype.handleTraceButtonClick = function () {
            console.log("handle Trace Button Clicked");
        };

        Entity.prototype.getOuterDiv = function (entity) {
            this.outerDiv = this.createOuterDiv(entity);
            this.parentDiv = this.createParentDiv(entity);
            //this.childDiv = this.createChildDiv(entity);
            return this.outerDiv;
        };

        Entity.prototype.setIndex = function (i) {
            this.index = i;
        };

        entitiesListSize.forEach((entity) => {
            let outerDiv = [];
            outerDiv = entity.getOuterDiv();
            accordionProjects.appendChild(outerDiv);
            console.log("entitiesListSize");
        });

        // ======>  POPUP WINDOW ZR <=======
        Entity.prototype.getOperationsData = function () {
            console.log("getOperationsData", this.name);

            if (this.typeId == 2) {
                //==child data operation <===

                window.sdfcData
                    ?.getChildDataRelatedToJob(this.guid)
                    .then((childDataOperation) => {
                        console.log(
                            "Childs related to selected project",
                            childDataOperation
                        );
                        if (childDataOperation) {
                            JobPanel.innerHTML = "";
                            const a = [];
                            try {
                                let jsonDataOperation = JSON.parse(childDataOperation);

                                jsonDataOperation.forEach((result, index) => {
                                    // Extract result data and send it to createChildDiv
                                    let resultData = result.Result;
                                    let resultObject = JSON.parse(resultData);
                                    console.log(
                                        "POPUP getOperationsData",
                                        resultObject + "index ==>" + index + resultObject.Name
                                    );

                                    a.push(
                                        this.createOperationsDiv(resultObject, true, index + 1)
                                    );
                                });

                                a.forEach((item) => {
                                    JobPanel.appendChild(item);
                                });
                            } catch (error) {
                                console.error("Error parsing JSON:", error);
                            }
                        } else {
                            console.log("childData is empty.");
                        }
                    })
                    .catch(function (error) {
                        console.error("Error fetching child data:", error);
                    });
            }
        };

        Entity.prototype.createOperationsDiv = function (
            jsonOperations,
            barFlag,
            operationIndex
        ) {
            console.log("createOperationsDiv jsonOperations => " + jsonOperations);

            const operationStatusItem = document.createElement("button");
            operationStatusItem.classList.add("operationStatusItem");
            const operationStatusInner = document.createElement("div");
            operationStatusInner.classList.add("operationStatusInner");
            operationStatusItem.appendChild(operationStatusInner);
            const operationStatusLeftPart = document.createElement("div");
            operationStatusLeftPart.classList.add("operationStatusLeftPart");
            operationStatusInner.appendChild(operationStatusLeftPart);
            const operationStatusCircle = document.createElement("div");
            operationStatusCircle.classList.add("operationStatusCircle");
            operationStatusCircle.classList.add(
                setColor(jsonOperations.IsDone, jsonOperations.InProgress)
            );
            operationStatusLeftPart.appendChild(operationStatusCircle);

            if (barFlag) {
                const operationStatusBarOuter = document.createElement("div");
                operationStatusBarOuter.classList.add("operationStatusBarOuter");
                operationStatusLeftPart.appendChild(operationStatusBarOuter);
                const operationStatusBar = document.createElement("div");
                operationStatusBar.classList.add("operationStatusBar");
                operationStatusBar.classList.add(
                    setColor(jsonOperations.IsDone, jsonOperations.InProgress)
                );
                operationStatusBarOuter.appendChild(operationStatusBar);
            }

            const operationsStatusCircleText = document.createElement("p");
            operationsStatusCircleText.classList.add("operationsStatusCircleText");
            operationsStatusCircleText.classList.add("text-sm");
            operationsStatusCircleText.classList.add("font-weight-bolder");
            operationsStatusCircleText.innerHTML = `${operationIndex}`;
            operationStatusCircle.appendChild(operationsStatusCircleText);

            const operationStatusRightPart = document.createElement("div");
            operationStatusRightPart.classList.add("operationStatusRightPart");
            operationStatusInner.appendChild(operationStatusRightPart);
            operationStatusRightPart.appendChild(
                createoperationStatusRightPartText(jsonOperations.Name, 1)
            );
            if (jsonOperations.InProgress === "True") {
                operationStatusRightPart.appendChild(
                    createoperationStatusRightPartText(jsonOperations.StartTime, 2)
                );
            }
            if (jsonOperations.IsDone === "True") {
                operationStatusRightPart.appendChild(
                    createoperationStatusRightPartText(jsonOperations.EndTime, 3)
                );
            }

            operationStatusItem.onclick = () => {
                this.handleOnClick(jsonOperations);
            };

            return operationStatusItem;
        };

        //===> VIEW OPERATION DATA <===

        Entity.prototype.handleOnClick = function (jsonOperations) {
            operationDetailsDiv.classList.remove("d-none");
            observationsDataDiv.classList.add("d-none");
            operationDetailsDataDiv.classList.add("d-none");
            observationsDetailSave.classList.add("d-none");
            clearInterval(timerInterval);

            operationName.innerHTML = jsonOperations.Name;
            operationTimerData.textContent = jsonOperations.TimeSpent;

            console.log(
                "handleOnClick" +
                jsonOperations.Status +
                "jsonOperations" +
                jsonOperations.OperationType
            );
            if (jsonOperations.IsDone === "True") {
                operationStartButtonContainer.classList.remove("d-none");
                operationPauseResumeButtonContainer.classList.add("d-none");
                console.log("handleOnClick" + jsonOperations.IsDone);

                operationEndButtons.disabled = true;
                operationStatusStartButtons.disabled = true;
                hopperRecoveryInput.disabled = true;
                buildRecoveryInput.disabled = true;
                hopperRecoveryInput.value = jsonOperations.HopperRecovery;
                buildRecoveryInput.value = jsonOperations.BuildRecovery;
            } else if (jsonOperations.InProgress === "True") {
                console.log("handleOnClick" + jsonOperations.InProgress);
                operationStartButtonContainer.classList.add("d-none");
                operationPauseResumeButtonContainer.classList.remove("d-none");
                pauseResumeButtonText.innerHTML = "Resume";
                document.getElementById("faPause").classList.add("d-none");
                document.getElementById("faPlay").classList.remove("d-none");
                operationStatusPauseResumeButtons.classList.remove(
                    "bg-gradient-warning"
                );
                operationStatusPauseResumeButtons.classList.add("bg-gradient-success");
                operationEndButtons.disabled = false;
                operationStatusStartButtons.disabled = false;
                hopperRecoveryInput.disabled = false;
                buildRecoveryInput.disabled = false;
                hopperRecoveryInput.value = "";
                buildRecoveryInput.value = "";
            } else {
                operationStartButtonContainer.classList.remove("d-none");
                operationPauseResumeButtonContainer.classList.add("d-none");
                operationEndButtons.disabled = false;
                operationStatusStartButtons.disabled = false;
                hopperRecoveryInput.disabled = false;
                buildRecoveryInput.disabled = false;
                hopperRecoveryInput.value = "";
                buildRecoveryInput.value = "";
            }

            const a = [
                jsonOperations.BarID,
                jsonOperations.QuantityCompleted,
                jsonOperations.QuantityRejected,
                "",
                "",
                "",
                "",
            ];
            operationDetailsData.forEach(
                (item, index) => (item.innerHTML = a[index])
            );

            if (
                jsonOperations.OperationType === "StockRecovery" &&
                jsonOperations.InProgress === "True" &&
                jsonOperations.QuantityCompleted >= 1
            ) {
                stockRecoveryDiv.classList.remove("d-none");
            } else {
                stockRecoveryDiv.classList.add("d-none");
            }

            accordionOperationButton.onclick = function () {
                operationDetailsDataDiv.classList.toggle("d-none");
                accordionOperationButton.classList.toggle("accordion-open"); // Toggle icon rotation
            };

            //===> TIMER START BUTTON <===
            operationStatusStartButtons.onclick = () => {
                operationStartButtonContainer.classList.add("d-none");
                operationPauseResumeButtonContainer.classList.remove("d-none");
                //===> TIMER <====
                startTime = Date.now() - totalElapsedTime;
                timerInterval = setInterval(updateTimer, 1000);

                window.sdfcData?.onStartButtonClick(
                    jsonOperations.GUID,
                    startButtonText.innerHTML,
                    timerData
                );
                this.getOperationsData();
                pauseResumeButtonText.innerHTML = "Pause";
                operationStatusPauseResumeButtons.classList.remove(
                    "bg-gradient-success"
                );
                operationStatusPauseResumeButtons.classList.add("bg-gradient-warning");
                document.getElementById("faPause").classList.remove("d-none");
                document.getElementById("faPlay").classList.add("d-none");
                //asyncDivOk.refreshData();
                //clearAccordionProjects();
            };

            //===> TIMER PAUSE/RESUME BUTTON <===
            operationStatusPauseResumeButtons.onclick = () => {
                if (pauseResumeButtonText.innerHTML === "Pause") {
                    pauseResumeButtonText.innerHTML = "Resume";
                    operationStatusPauseResumeButtons.classList.remove(
                        "bg-gradient-warning"
                    );
                    operationStatusPauseResumeButtons.classList.add(
                        "bg-gradient-success"
                    );
                    document.getElementById("faPause").classList.add("d-none");
                    document.getElementById("faPlay").classList.remove("d-none");
                    clearInterval(timerInterval);
                } else {
                    pauseResumeButtonText.innerHTML = "Pause";
                    operationStatusPauseResumeButtons.classList.remove(
                        "bg-gradient-success"
                    );
                    operationStatusPauseResumeButtons.classList.add(
                        "bg-gradient-warning"
                    );
                    document.getElementById("faPause").classList.remove("d-none");
                    document.getElementById("faPlay").classList.add("d-none");
                    //===> TIMER <===
                    const storedTime = jsonOperations.TimeSpent;
                    console.log(
                        "operationStatusPauseResumeButtons storedTime" + storedTime
                    );

                    // Parse the stored time to get the total elapsed time in milliseconds
                    const storedTimeParts = storedTime.split(":");
                    totalElapsedTime =
                        (parseInt(storedTimeParts[0]) * 3600 +
                            parseInt(storedTimeParts[1]) * 60 +
                            parseInt(storedTimeParts[2])) *
                        1000;
                    startTime = Date.now() - totalElapsedTime;
                    timerInterval = setInterval(updateTimer, 1000);
                }
                window.sdfcData?.onStartButtonClick(
                    jsonOperations.GUID,
                    pauseResumeButtonText.innerHTML,
                    timerData
                );
                //asyncDivOk.refreshData();
                //clearAccordionProjects();
                this.getOperationsData();
            };

            //===> TIMER END BUTTON <===
            operationEndButtons.onclick = () => {
                console.log("operationEndButtons clicked");
                window.sdfcData?.onEndButtonClick(jsonOperations.GUID, timerData);
                clearInterval(timerInterval);
                startButtonText.textContent = "Start";
                operationStartButtonContainer.classList.remove("d-none");
                operationPauseResumeButtonContainer.classList.add("d-none");
                operationEndButtons.disabled = true;
                operationStatusStartButtons.disabled = true;
                startTime = null;
                if (jsonOperations.OperationType === "StockRecovery") {
                    console.log("hopperRecovery: " + hopperRecoveryInput.value);
                    console.log("buildRecoveryInput: " + buildRecoveryInput.value);
                    window.sdfcData?.onObservationStockRecoverySave(
                        hopperRecoveryInput.value,
                        buildRecoveryInput.value,
                        jsonOperations.GUID
                    );
                } else {
                    stockRecoveryDiv.classList.add("d-none");
                }

                //asyncDivOk.refreshData();
                //clearAccordionProjects();
                console.log(
                    "operationEndButtons => " +
                    jsonOperations.Name +
                    " jsonOperations.IsDone =>" +
                    jsonOperations.IsDone +
                    " jsonOperations.InProgress =>" +
                    jsonOperations.InProgress
                );
                this.getOperationsData();
            };

            function updateTimer() {
                const currentTime = Date.now();
                totalElapsedTime = currentTime - startTime;
                const elapsedTime = new Date(totalElapsedTime);
                const hours = elapsedTime.getUTCHours();
                const minutes = elapsedTime.getUTCMinutes();
                const seconds = elapsedTime.getUTCSeconds();

                operationTimerData.textContent = `${String(hours).padStart(
                    2,
                    "0"
                )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
                    2,
                    "0"
                )}`;
                timerData = `${String(hours).padStart(2, "0")}:${String(
                    minutes
                ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            }

            //===> ADD OBSERVATION DATA <===
            accordionObservationsButton.onclick = function () {
                observationsDetailSave.classList.toggle("d-none");
                observationsDataDiv.classList.toggle("d-none");
                accordionObservationsButton.classList.toggle("accordion-open"); // Toggle icon rotation

                window.sdfcData?.onDigitalAssertInit();
                console.log("observation clicked");

                // ===> SYNCFUSION START <===
                try {
                    if (!isInitialized) {
                        ej.base.enableRipple(true);

                        // Render the TreeView
                        treeObj = new ej.navigations.TreeView({
                            fields: {
                                dataSource: data,
                                id: "id",
                                text: "nodeText",
                                child: "nodeChild",
                                iconCss: "icon",
                                barID: "barID",
                                guid: "guid",
                                // imageUrl: "image",
                                expanded: "expanded",
                            },
                            nodeClicked: nodeClick,
                            nodeEdited: onNodeEdited,
                        });
                        treeObj.appendTo(treeElement);

                        async function onNodeEdited(args) {
                            renamedTxt = args.newText;
                            console.log("Modified Txt => " + renamedTxt);
                            const treeData = JSON.stringify(data);
                            console.log("Selected Node => " + treeObj.selectedNodes);
                            const modifiedData = await window.sdfcData?.onRenameNodeClick(
                                treeData,
                                renamedTxt,
                                treeObj.selectedNodes
                            );
                            console.log("Modified Data => " + modifiedData);
                            data = JSON.parse(modifiedData);
                            console.log("After Rename Item" + JSON.stringify(data, null, 2));
                        }

                        function nodeClick(args) {
                            if (args.event.which === 3) {
                                treeObj.selectedNodes = [args.node.getAttribute("data-uid")];
                            }
                        }

                        let menuOptions = {
                            target: "#tree",
                            items: menuItems,
                            select: menuclick,
                            beforeOpen: beforeopen,
                        };

                        let menuObj = new ej.navigations.ContextMenu(
                            menuOptions,
                            menuElement
                        );

                        let index = 1;

                        digitalAddFolderButton.addEventListener("click", () => {
                            console.log("digitalAddFolderButton clicked:"); // Log the clicked link
                            let nodeId = index;
                            let item = { id: nodeId, nodeText: "New Folder" };
                            treeObj.addNodes([item]);
                            index++;
                            data.push(item);
                            treeObj.beginEdit(nodeId);
                            const treeData = JSON.stringify(data);
                            const modifiedData =
                                window.sdfcData?.onAddMainNodeClick(treeData);
                            console.log("Modified Data => " + modifiedData);

                            modifiedData
                                .then((parseData) => {
                                    // the resolved value of the Promise
                                    try {
                                        console.log("Syncfusion before parse: " + parseData);
                                        data = JSON.parse(parseData);
                                        console.log("Syncfusion parsedData: " + data);
                                        console.log(
                                            "Syncfusion Add New Item: " +
                                            JSON.stringify(data, null, 2)
                                        );
                                    } catch (error) {
                                        console.error("Error parsing JSON:", error);
                                    }
                                })
                                .catch((error) => {
                                    console.error("Error with Promise:", error);
                                });
                        });

                        async function menuclick(args) {
                            let targetNodeId = treeObj.selectedNodes[0];
                            if (targetNodeId !== undefined && targetNodeId !== null) {
                                if (args.item && args.item.text == "Add New SubFolder") {
                                    let nodeId = index;
                                    index++;
                                    let item = { id: nodeId, nodeText: "New Folder" };
                                    treeObj.addNodes([item], targetNodeId, null);
                                    treeObj.beginEdit(nodeId);
                                    const treeData = JSON.stringify(data);
                                    console.log("Selected: " + treeObj.selectedNodes);
                                    const modifiedData = await window.sdfcData?.onAddNewNodeClick(
                                        treeData,
                                        item,
                                        treeObj.selectedNodes
                                    );
                                    console.log("Modified Data => " + modifiedData);
                                    data = JSON.parse(modifiedData);
                                    console.log("Syncfusion Add New SubFolder data: " + data);

                                    //modifiedData.then(parseData => {
                                    //    // the resolved value of the Promise
                                    //    try {
                                    //        console.log("Syncfusion before parse: " + parseData);
                                    //        data = JSON.parse(parseData);
                                    //        console.log("Syncfusion parsedData: " + data);
                                    //        console.log("Syncfusion Add New SubFolder data: " + JSON.stringify(data, null, 2));
                                    //    } catch (error) {
                                    //        console.error("Error parsing JSON:", error);
                                    //    }
                                    //}).catch(error => {
                                    //    console.error("Error with Promise:", error);
                                    //});
                                } else if (args.item && args.item.text == "Delete") {
                                    treeObj.removeNodes(targetNodeId);
                                    console.log(
                                        "Syncfusion Delete Item" + JSON.stringify(data, null, 2)
                                    );
                                } else if (args.item && args.item.text == "Rename") {
                                    treeObj.beginEdit(targetNodeId);
                                    console.log(
                                        "Syncfusion Rename Item" + JSON.stringify(data, null, 2)
                                    );
                                } else if (args.item && args.item.text == "Add URL") {
                                    digitalAddUrlContainer.classList.remove("d-none");
                                    digitalAddUrlButton.addEventListener("click", function () {
                                        console.log(
                                            "observationNameInput: " + observationUrlInput.value
                                        );
                                        observationUrlInput.value = "";
                                        digitalAddUrlContainer.classList.add("d-none");
                                    });
                                } else if (args.item && args.item.text == "Upload") {
                                    const fileInput = document.createElement("input");
                                    fileInput.type = "file";
                                    fileInput.style.display = "none";
                                    fileInput.id = "fileInput"; // Set the id attribute

                                    // Add an event listener to the file input for when a file is selected
                                    fileInput.addEventListener("change", (e) => {
                                        const selectedFile = e.target.files[0];
                                        console.log("Selected file:" + selectedFile);

                                        if (selectedFile) {
                                            const reader = new FileReader();

                                            reader.onload = function (e) {
                                                const fileContents = e.target.result;

                                                console.log("File Contents:", fileContents);
                                                console.log("File Contents Type:", typeof fileContents);

                                                let nodeId = index;
                                                index++;
                                                let item = { id: nodeId, nodeText: selectedFile.name };
                                                treeObj.addNodes([item], targetNodeId, null);
                                                treeObj.beginEdit(nodeId);
                                                const treeData = JSON.stringify(data);

                                                const modifiedData = window.sdfcData?.onUploadFileClick(
                                                    treeData,
                                                    item,
                                                    fileContents,
                                                    selectedFile.name,
                                                    treeObj.selectedNodes
                                                );

                                                console.log("Modified Data => " + modifiedData);

                                                modifiedData
                                                    .then((parseData) => {
                                                        // the resolved value of the Promise
                                                        try {
                                                            console.log(
                                                                "Syncfusion before parse: " + parseData
                                                            );
                                                            data = JSON.parse(parseData);
                                                            console.log("Syncfusion parsedData: " + data);
                                                            console.log(
                                                                "Syncfusion Add New Item: " +
                                                                JSON.stringify(data, null, 2)
                                                            );
                                                        } catch (error) {
                                                            console.error("Error parsing JSON:", error);
                                                        }
                                                    })
                                                    .catch((error) => {
                                                        console.error("Error with Promise:", error);
                                                    });
                                            };
                                            reader.readAsDataURL(selectedFile);
                                        }
                                        document.body.removeChild(fileInput);
                                    });

                                    document.body.appendChild(fileInput);
                                    fileInput.click();
                                }
                            }
                        }

                        function beforeopen(args) {
                            let targetNodeId = treeObj.selectedNodes[0];
                            let targetNode = document.querySelector(
                                '[data-uid="' + targetNodeId + '"]'
                            );

                            if (targetNode) {
                                if (targetNode.classList.contains("delete")) {
                                    menuObj.enableItems(["Delete"], false);
                                } else {
                                    menuObj.enableItems(["Delete"], true);
                                }

                                if (targetNode.classList.contains("rename")) {
                                    menuObj.enableItems(["Rename"], false);
                                } else {
                                    menuObj.enableItems(["Rename"], true);
                                }
                            }
                        }
                        isInitialized = true; // Set the flag to true to indicate initialization
                    }
                } catch {
                    console.log("");
                }
                // ===> SYNCFUSION END <===
            };

            //===> OBSERVATION SAVE <===
            observationsDetailSave.onclick = function () {
                console.log("Observation Save Button clicked");
                console.log("Data =>", data);
                const treeData = JSON.stringify(data);
                console.log("Tree Data =>", treeData);
                console.log("observationNameInput: " + observationNameInput.value);
                console.log("observationNumberInput: " + observationNumberInput.value);
                console.log("observationNotesInput: " + observationNotesInput.value);
                window.sdfcData?.onObservationDataSaveButtonClick(
                    observationNameInput.value,
                    observationNumberInput.value,
                    observationNotesInput.value,
                    jsonOperations.GUID,
                    treeData
                );

                observationNameInput.value = "";
                observationNumberInput.value = "";
                observationNotesInput.value = "";
                data = [];
                treeObj.fields.dataSource = [];
            };
        };

        function createoperationStatusRightPartText(text, type) {
            console.log("text" + text + "type" + type);
            const p1Classes = ["text-sm", "font-weight-normalBold", "mb-0"];
            const p2Classes = ["text-sm", "font-weight-light", "mb-0"];
            const div = document.createElement("div");
            div.classList.add("operationStatusRightPartText");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            if (type === 1) {
                p1Classes.forEach((item) => p1.classList.add(item));
                p1.innerHTML = text;
                div.appendChild(p1);
            } else if (type === 2) {
                p1Classes.forEach((item) => p1.classList.add(item));
                p1.innerHTML = "Start Date:";
                div.appendChild(p1);
                p2Classes.forEach((item) => p2.classList.add(item));
                p2.innerHTML = text;
                div.appendChild(p2);
            } else if (type === 3) {
                p1Classes.forEach((item) => p1.classList.add(item));
                p1.innerHTML = "End Date:";
                div.appendChild(p1);
                p2Classes.forEach((item) => p2.classList.add(item, "ps-ob-2"));
                p2.innerHTML = text;
                div.appendChild(p2);
            }
            div.appendChild(p1);
            div.appendChild(p2);
            return div;
        }

        function setColor(isDone, inProgress) {
            if (isDone === "True") {
                return "bg-gradient-success";
            } else if (inProgress === "True") {
                return "bg-gradient-new-warning";
            } else {
                return "bg-gradient-light";
            }
        }
        console.log("Exiting AsyncDiv!!");
        console.timeEnd("myTimer");
    });
});
