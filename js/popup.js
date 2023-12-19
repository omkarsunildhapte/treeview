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
  const itemsPerPage = 4;
  const tableBody = document.getElementById("tableBody");
  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");

  function updateTable(startIndex) {
    tableBody.innerHTML = "";

    for (let i = startIndex; i < startIndex + itemsPerPage && i < projectsData.length; i++) {
      const row = document.createElement("tr");
      row.classList.add("border-0");
      row.innerHTML = `
        <td class="border-0 text-center" style="overflow-x: auto; max-width: 150px;">${projectsData[i].Name}</td>
        <td class="border-0 text-center">${projectsData[i].Status}</td>
        <td class="border-0 text-center"><span class="barcode">${projectsData[i].BarID}</span></td>
      `;
      tableBody.appendChild(row);
    }
  }
  let currentPage = 0;

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateTable(currentPage * itemsPerPage);
    }
  });

  nextPageButton.addEventListener("click", () => {
    const maxPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < maxPages - 1) {
      currentPage++;
      updateTable(currentPage * itemsPerPage);
    }
  });
  updateTable(currentPage * itemsPerPage);



  const jsonData = [
    { category: "Projects", count: 5 },
    { category: "Jobs", count: 10 },
    { category: "Operations", count: 15 },
    { category: "Tasks", count: 20 },
  ];
  const initialData = [
    { category: "Late", count: 1 },
    { category: "Job", count: 1 },
    { category: "Operation", count: 1 },
    { category: "Task", count: 1 },
  ];
  function createCard(category, count) {
    return `
      <div style="max-width: 360px; min-width: 340px;" class="card col-md-3 mb-2 m-0 mx-1">
          <div class="card-body m-0 p-0 py-3">
              <div class="row align-items-center">
                  <div class="col-md-8">
                      <span class="fw-bold">${category}</span>
                  </div>
                  <div class="col-md-2">
                      <span class="fw-bold" id="count-${category}">${count}</span>
                  </div>
                  <div class="col-auto dashboard-tooltip px-3 py-2 text-center rounded-3">
                      <i class="fa fa-ellipsis-v toggle-popup text-white" data-popup-id="popup-${category}"></i>
                  </div>
              </div>
          </div>
          <div class="card popup" id="popup-${category}" style="width: 250px;position: absolute;right: 36px;top: 60px;z-index: 1; display: none;">
              <div class="card-body">
                  <ul class="list-group">
                      <li style="font-size: 12px;" class="list-group-item border-0 border rounded-3 text-center active-popup" data-category="${category}" data-popup-id="popup-${category}" data-count-id="count-${category}">All
                          ${category}</li>
                      <li style="font-size: 12px;" class="list-group-item border-0 border rounded-3 text-center" data-category="${category}" data-popup-id="popup-${category}" data-count-id="count-${category}">Created
                          ${category}</li>
                      <li style="font-size: 12px;" class="list-group-item border-0 border rounded-3 text-center" data-category="${category}" data-popup-id="popup-${category}" data-count-id="count-${category}">Work in
                          Progress ${category}
                      </li>
                      <li style="font-size: 12px;" class="list-group-item border-0 border rounded-3 text-center" data-category="${category}" data-popup-id="popup-${category}" data-count-id="count-${category}">Completed
                          ${category}</li>
                  </ul>
              </div>
          </div>
      </div>
    `;
  }

  document.addEventListener('click', function (event) {
    const target = event.target;
    debugger
    document.querySelectorAll('.popup').forEach(popup => {
      if (popup.id !== `popup-${target.dataset.category}`) {
        popup.style.display = 'none';
      }
    });
    if (target.classList.contains('toggle-popup')) {
      const popupId = target.getAttribute('data-popup-id');
      const popup = document.getElementById(popupId);
      popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    }

    if (target.classList.contains('list-group-item')) {
      const category = target.dataset.category;
      const countId = target.dataset.countId;
      const countSpan = document.getElementById(countId);

      // You can update the count value based on the clicked item
      // For example, increase the count by 1
      const currentCount = parseInt(countSpan.innerText);
      countSpan.innerText = currentCount + 1;
    }
  });

  function updateDashboard(jsonData) {
    const dashboardCards = document.getElementById('dashboardCards');
    dashboardCards.innerHTML = ''; // Clear existing content

    jsonData.forEach(({ category, count }) => {
      const card = createCard(category, count);
      dashboardCards.innerHTML += card;
    });
  }
  function updateDashboard2(jsonData) {
    const dashboardCards = document.getElementById('dashboardCards2');
    dashboardCards.innerHTML = ''; // Clear existing content

    jsonData.forEach(({ category, count }) => {
      const card = createCard(category, count);
      dashboardCards.innerHTML += card;
    });
  }
  updateDashboard(jsonData);
  updateDashboard2(initialData)
  document.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('active-popup')) {
      const popupId = target.dataset.popupId;
      const popup = document.getElementById(popupId);
      popup.style.display = 'none';
    }
  });



  const secondJson = [
    { project: 'Project 1', members: 'Team 1', promisedDate: '2023-01-15', completion: '30%' },
    { project: 'Project 2', members: 'Team 2', promisedDate: '2023-02-01', completion: '50%' },
    { project: 'Project 3', members: 'Team 3', promisedDate: '2023-03-10', completion: '80%' },
    { project: 'Project 4', members: 'Team 4', promisedDate: '2023-04-05', completion: '100%' },
    { project: 'Project 5', members: 'Team 5', promisedDate: '2023-05-20', completion: '100%' },
    { project: 'Project 6', members: 'Team 6', promisedDate: '2023-06-15', completion: '100%' },
  ];

  const tableBody2 = document.getElementById('tableBody1');
  const tableBody1count = document.getElementById('tableBody1count');
  let completedCount = 0;
  secondJson.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class='text-center'>${entry.project}</td>
        <td class='text-center'>${entry.members}</td>
        <td class='text-center'>${entry.promisedDate}</td>
        <td class='text-center'>${entry.completion}</td>
    `;
    if (parseInt(entry.completion) === 100) {
      completedCount++;
    }
    tableBody2.appendChild(row);
  });
  tableBody1count.textContent = completedCount;




  const data = [
    { month: "January", value: 10 },
    { month: "February", value: 15 },
    { month: "March", value: 8 },
    { month: "April", value: 12 },
    { month: "May", value: 20 }
    // Add more months and values as needed
  ];

  // Set up the SVG container dimensions
  const svg = d3.select("#scatterPlot");
  const margin = { top: 20, right: 20, bottom: 40, left: 40 };
  const width = 400 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Create a group for the chart within the SVG
  const chart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Set up the scales for x and y axes
  const xScale = d3.scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(data.map(d => d.month));

  const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, d => d.value)]);

  // Create the x-axis
  chart.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("class", "axis-label")
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");

  // Create the y-axis
  chart.append("g")
    .call(d3.axisLeft(yScale))
    .append("text")
    .attr("class", "axis-label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Project Number");

  // Create the dots
  chart.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.month) + xScale.bandwidth() / 2)
    .attr("cy", d => yScale(d.value))
    .attr("r", 5); // Set the radius of the dots

  // Connect the dots with lines
  chart.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", d3.line()
      .x(d => xScale(d.month) + xScale.bandwidth() / 2)
      .y(d => yScale(d.value))
    );
})