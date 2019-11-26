
$.getJSON(
  'https://randomuser.me/api/?nat=us&results=12',
  {dataType: 'json'},
  function (data){
    let employeeList = "<ul>";
    $.each(data.results, function(index, employee){
      let mm = employee.dob.date.substring(5,7);
      let dd = employee.dob.date.substring(8,10);
      let yyyy = employee.dob.date.substring(0,4);
      // Create and generate grid of random employees and data but only display minimal employee data
      employeeList += `<li class="employee"><img src="${employee.picture.large}">
        <div class="employeeData"><h2 style="text-transform: capitalize;">${employee.name.first} ${employee.name.last}</h2>
        <p>${employee.email}</p>
        <p style="text-transform: capitalize;">${employee.location.city}</p></div>
        <div class="employeeExtraData" style="display:none"><p>${employee.phone}</p>
        <p style="text-transform: capitalize;">${employee.location.street} ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
        <p>Birthday: ${mm}/${dd}/${yyyy}</p>
        </div></li>`;
    });
    employeeList += '</ul>';
    $('.employeeGrid').html(employeeList);

    // Modal pop-up with full employee data
    const modal = document.querySelector('.modal');
    const x = document.querySelector(".close");
    const li = document.querySelectorAll('.employee');
    const employeeFullData = document.querySelector('.modal-content-text');
    $.each(li, function(i){
      li[i].addEventListener('click', (e)=>{
        let employeeHTML = $(this).clone();
        modal.style.display = "block";
        $(employeeFullData).html(employeeHTML);
        $(employeeHTML).removeClass('employee').addClass('employeeFull');
        $(employeeHTML).children('div').show();
      });

    });
    x.addEventListener('click', (e)=>{
      modal.style.display = "none";
    });
  }
);
