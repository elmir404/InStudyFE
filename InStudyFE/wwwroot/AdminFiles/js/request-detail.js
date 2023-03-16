$(document).ready(function () {
    const aboutId = localStorage.getItem('requestId');

    var $aboutForm = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/StudentRequest/GetStudentRequest?id=${aboutId}`,
        success: function (data) {

            console.log(data);
            $aboutForm.empty()

            $aboutForm.append(
                `
                        

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Name :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="azHeader" value="${data?.data?.name}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Surname :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="ruHeader" value="${data?.data?.surName}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Phone :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="enHeader" value="${data?.data?.phone}" class="form-control">
                                </div>
                            </div> 

<div class="row mb-4">
                                <label class="col-md-3 form-label">Email :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="enHeader" value="${data?.data?.email}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Consultation Date :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="enHeader" value="${data?.data?.consultationDate}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Is Online :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="enHeader" value="${data?.data?.isOnline}" class="form-control">
                                </div>
                            </div>

<div class="row mb-4">
                                <label class="col-md-3 form-label">Student Country :</label>
                                <div class="col-md-9">
                                    <input type="text" readonly id="enHeader" value="${data?.data?.yourCountry}" class="form-control">
                                </div>
                            </div>

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription"  name="example">${data.data.description}</textarea>
                                </div>
                            </div>
                        
                         
                        
                        `
            )
            $('.content').richText();
           


        }
    })
    
});