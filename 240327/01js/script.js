const cityOption = document.querySelector("#city");
const stateOption = document.querySelector("#state");
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
const searchForm = document.querySelector(".shopsearch_filter form");
const searchButton = document.querySelector(".shopsearch_filter span");
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter input[type='checkbox']"
);
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");

// table data making
const createRow = (data) => {
  const row = document.createElement("tr");
  row.id = data.store;
  row.innerHTML = `
    <td>${data.store}</td>
    <td>${data.main_area}</td>
    <td>${data.address}</td>
    <td>${data.tel}</td>
    <td>${data.service
      .map((service) => `<i class="${service}"></i>`)
      .join("")}</td>
  `;
  return row;
};

// data rendering
const itemPerPage = 5;
let currentPage = 1;

const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";
  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};

// page nation
const renderPagination = (data) => {
  pageNationContainer.innerHTML = "";
  const totalDataLength = data.length;
  if (totalDataLength <= itemPerPage) {
    return;
  }
  const totalPages = Math.ceil(totalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);

  if (currentPageGroup > 1) {
    const prevGroupButton = document.createElement("li");
    prevGroupButton.innerText = "◀";
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }

  for (
    let i = (currentPageGroup - 1) * 5 + 1;
    i <= Math.min(currentPageGroup * 5, totalPages);
    i++
  ) {
    const pageLink = document.createElement("li");
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageNationContainer.appendChild(pageLink);
  }

  if (currentPageGroup < Math.ceil(totalPages / 5)) {
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = "▶";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPageGroup * 5 + 1;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }

  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const lastPageButton = document.createElement("li");
  lastPageButton.style.width = 50 + "px";
  lastPageButton.innerText = "마지막";
  lastPageButton.addEventListener("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderPagination(data);
  });
  pageNationContainer.appendChild(lastPageButton);
};

// jsonData
const cityList = "./cityInfo.json";
const storeList = "./storeInfo.json";

let cityInfo;
let storeInfo;

fetch(cityList)
  .then((response) => response.json())
  .then((data) => {
    cityInfo = data;
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      cityOption.appendChild(option);
    }
  });

fetch(storeList)
  .then((response) => response.json())
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderPagination(storeInfo);
  });

// cursor move
const cursor = document.querySelector("#cursor");

// cursor pageX, Y
let x = 0;
let y = 0;

// cursor original & speed
let targetX = 0;
let targetY = 0;
let speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();

const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};

// load spinner
const spinner = document.querySelector(".spinner");
const showSpinner = () => {
  spinner.classList.remove("hiddenspinner");
};
const hiddenSpinner = () => {
  spinner.classList.add("hiddenspinner");
};
showSpinner();
setTimeout(() => {
  hiddenSpinner();
}, 1000);

// map click event
const mapAreas = document.querySelectorAll(".shopsearch_map > div");
mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);

    showSpinner();
    setTimeout(() => {
      hiddenSpinner();
    }, 1000);

    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");

    const clickedCity = e.target.id;
    const matchedCityInfo = storeInfo.filter(
      (city) => city.main_area === clickedCity
    );

    tableBody.innerHTML = "";
    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
      if (matchedCityInfo.length >= 5) {
        renderPagination(matchedCityInfo);
      } else {
        pageNationContainer.innerHTML = "";
      }
    }

    cityOption.value = clickedCity;
    cityOption.dispatchEvent(new Event("change"));
  });
});

// city option change event
cityOption.addEventListener("change", () => {
  currentPage = 1;

  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 1000);

  const selectedCity = cityOption.value;
  if (selectedCity !== "none") {
    stateOption.innerHTML = "<option>구/군 선택</option>";
    if (cityInfo[selectedCity]) {
      cityInfo[selectedCity].forEach((cityItem) => {
        const option = document.createElement("option");
        option.innerText = cityItem;
        stateOption.appendChild(option);
      });
    }
  }

  mapAreas.forEach((area) => {
    if (area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });

  const matchedCityInfo = storeInfo.filter(
    (city) => city.main_area === selectedCity
  );
  tableBody.innerHTML = "";
  if (matchedCityInfo.length > 0) {
    renderData(matchedCityInfo);
    if (matchedCityInfo.length >= 5) {
      renderPagination(matchedCityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
  } else {
    renderData(storeInfo);
    renderPagination(storeInfo);
  }
});

// checkbox option
const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((checkbox) => checkbox.value);

  const filteredData = data.filter((item) =>
    selectedCategories.every((service) => item.service.includes(service))
  );
  renderData(filteredData);
  renderPagination(filteredData);
};

const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 1000);

  filterData(storeInfo);
};

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("change", optionMode);
});

// search event 01
searchButton.addEventListener("click", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const statevalue = stateOption.value;
  const searchValue = searchBar.value;

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;

  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === statevalue;
      console.log(mainAreaMatched, subAreaMatched);

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (statevalue === "구/군 선택" && !alertShown) {
        alert("구/군 선택해주세요!");
        alertShown = true;
      }
    });
  }

  renderData(searchResults);

  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

// search event 02
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  showSpinner();
  setTimeout(() => {
    hiddenSpinner();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const statevalue = stateOption.value;
  const searchValue = searchBar.value;

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;

  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === statevalue;
      console.log(mainAreaMatched, subAreaMatched);

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (statevalue === "구/군 선택" && !alertShown) {
        alert("구/군 선택해주세요!");
        alertShown = true;
      }
    });
  }

  renderData(searchResults);

  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});
