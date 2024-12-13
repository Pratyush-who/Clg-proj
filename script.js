const reports = [
    {
      id: 1,
      fileIcon: "📄",
      linkText: "Health Reports",
      Patients_Room_Number: "1018",
    },
    {
      id: 2,
      fileIcon: "📄",
      linkText: "Eye Test Reports",
      Patients_Room_Number: "1079",
    },
    {
      id: 3,
      fileIcon: "📄",
      linkText: "Glucose level Reports",
      Patients_Room_Number: "9999",
    },
  ];
  
  const reportsList = document.getElementById("reports-list");
  
  reports.forEach((report) => {
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${report.id}</td>
      <td>
        <div class="report-icon">${report.fileIcon}</div>
      </td>
      <td>
        <a href="#" class="report-link">${report.linkText}</a>
      </td>
      <td>${report.Patients_Room_Number}</td>
      <td>
        <button class="delete-btn">🗑</button>
        <button class="download-btn">📥</button>
      </td>
    `;
  
    reportsList.appendChild(row);
  });