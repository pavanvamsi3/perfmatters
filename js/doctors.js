$(document).ready(function() {
    var speciality = $('.search .query').val();
    getDoctors(speciality, function(doctors) {
        var doctorDom;
        for (var i = 0; i < doctors.length; i++) {
            doctorDom = buildDoctorDom(doctors[i]);
            $('.doctors').append(doctorDom);
        }
    });
});

function getDoctors(speciality, callback) {
    var url = 'https://api.practo.com/search/?city=bangalore&speciality=' + speciality;
    $.ajax({
        url: url,
        success: function(data) {
            console.log(data.doctors);
            callback(data.doctors);
        }
    });
}

function buildDoctorDom(doctor) {
    var element = document.createElement('div');
    element.className = 'doctor';
    var photo = document.createElement('img');
    photo.src = getDoctorPhoto(doctor);
    photo.className = 'photo'
    element.appendChild(photo);
    var name = document.createElement('span');
    name.textContent = getDoctorName(doctor);
    name.className = 'name';
    element.appendChild(name);
    var clinic = document.createElement('span');
    clinic.textContent = getClinicName(doctor);
    clinic.className = 'clinic';
    element.appendChild(clinic);
    return element;
}

function getDoctorName(doctor) {
    return doctor.doctor_name;
}

function getDoctorPhoto(doctor) {
    for (var i = 0; i < doctor.photos.length; i++) {
        if (doctor.photos[i].is_default) return doctor.photos[i].url;
    }
}

function getClinicName(doctor) {
    return doctor.practice_name;
}
