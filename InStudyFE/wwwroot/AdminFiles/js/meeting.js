$(document).ready(function () {
    $('#meet-datatable').DataTable({
        ajax: {
            url: 'https://fainablogapi.herokuapp.com/api/Meets/GetMeets',
            dataSrc: 'data'
        },
        columns: [
            { data: 'date' },
            { data: 'startDate' },
            { data: 'endDate' },
            {
                data: 'id', render: function (data, type, row, meta) {
                    
                    return `
                            <div class="btn-list">

                            <button onclick=DeleteMeet(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
                            </button>
                                <button onclick=Edit(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-warning">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </div>

`
                                                                                      
                               
                       

                }
             },




        ]
    });
    $('#active-meets').DataTable({
        ajax: {
            url: 'https://localhost:7223/api/Meets/GetMeetByStatusId?statusId=0',
            dataSrc: 'data'
        },
        columns: [
            { data: 'date' },
            { data: 'startDate' },
            { data: 'endDate' },
            {
                data: 'id', render: function (data, type, row, meta) {

                    return `
                            <div class="btn-list">

                            <button onclick=DeleteMeet(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
                            </button>
                                <button onclick=Edit(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-warning">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </div>

`




                }
            },




        ]
    });
    $('#approved-meets').DataTable({
        ajax: {
            url: 'https://localhost:7223/api/Meets/GetMeetByStatusId?statusId=1',
            dataSrc: 'data'
        },
        columns: [
            { data: 'date' },
            { data: 'startDate' },
            { data: 'endDate' },
            { data: 'reservedBy' },
            {
                data: 'id', render: function (data, type, row, meta) {

                    return `
                            <div class="btn-list">

                            <button onclick=DeleteMeet(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
                            </button>
                                <button onclick=Edit(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-warning">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </div>

`




                }
            },




        ]
    });
    $('#canceled-meets').DataTable({
        ajax: {
            url: 'https://localhost:7223/api/Meets/GetMeetByStatusId?statusId=2',
            dataSrc: 'data'
        },
        columns: [
            { data: 'date' },
            { data: 'startDate' },
            { data: 'endDate' },
            { data: 'reservedBy' },
            {
                data: 'id', render: function (data, type, row, meta) {

                    return `
                            <div class="btn-list">

                            <button onclick=DeleteMeet(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
                            </button>
                                <button onclick=Edit(${JSON.stringify(data)})  type="button" class="btn  btn-sm btn-warning">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                        </div>

`




                }
            },




        ]
    });
    //var $meetings = $('#meetings');
    //function get() {
    //    $.ajax({
    //        type: 'GET',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        url: `https://fainablogapi.herokuapp.com/api/Meets/GetMeets`,

    //        success: function (data) {
    //            $meetings.empty();
    //            $.each(
    //                data.data, function (i, value) {
    //                    console.log(value);

    //                    $meetings.append(
    //                        `
    //                          <tr>
                                   
    //                                                    <td>${value.date}</td>
    //                                                    <td>${value.startDate}</td>
    //                                                    <td>${value.endDate}</td>
    //                                                    <td>
    //                                                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    //                                                        <button type="button" class="btn btn-danger ">Delete</button>
    //                                                        </div>
                                                            
    //                                                    </td>
                                                          
    //                           </tr>
                               
    //                        `
    //                    )

    //                }
    //            )

    //        }

    //    });
    //}
    $(document).on('click', '#addMeeting', async function () {
        var day = $("#day").val();
        var strd = $("#startDate").val();
        var endd = $("#endDate").val();
        $.ajax({
            type: "POST",
            url: 'https://fainablogapi.herokuapp.com/api/Meets/AddMeet',
            contentType: 'application/json',
            data: JSON.stringify({

                date: day,
                startDate: strd,
                endDate: endd,
               

            }),
            success: function (response) {
                if (response.success == true) {
                    location.href ="/FainaAdmin/Meetings/MeetingList"
                }
            },

        });
       
            //$.ajax({
            //    type: "POST",
            //    url: 'https://fainablogapi.herokuapp.com/api/Meets/AddMeet',
            //    contentType: 'application/json',
            //    data: JSON.stringify({

            //        date: day,
            //        startDate: strd,
            //        endDate: endd,


            //    }),
            //    success: function (response) {
            //        if (response.success == true) {
            //            location.href = "/FainaAdmin/Meetings/MeetingList"
            //        }
            //    },

            //});

        


    });
    $(document).on('click', '#updateMeeting', async function () {
        var meetId = $("#updatemetingId").val();
        var approvedBy = $("#approvedBy").val();
        var status = $("#statusId").val();
        console.log(approvedBy);
        var url;
        if (approvedBy == '')
            url = `https://localhost:7223/api/Meets/UpdateMeet?statusId=${status}&meetId=${meetId}`
        else 
            url = `https://localhost:7223/api/Meets/UpdateMeet?statusId=${status}&userName=${approvedBy}&meetId=${meetId}`
        console.log(url);
        $.ajax({
            type: "PUT",
            url:url,
            success: function (response) {
                if (response.success == true) {
                    location.reload();
                }
            },

        });
    });
    //get();
});
function DeleteMeet(meet) {

    $.ajax({
        type: "DELETE",
        url: `https://fainablogapi.herokuapp.com/api/Meets/DeleteMeet?meetId=${meet}`,
        success: function (result) {
            if (result.success == true) {
                console.log(result);
            }
            else {
                alert(result.message)
            }
        }
    });

}
function Edit(meet) {
    $('#updateMeetingModal').modal('show');
    $('#updatemetingId').val(meet);

}