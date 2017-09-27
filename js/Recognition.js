$(function() {
    $('#Recognition').click(function(e) {
        e.preventDefault();
        $('.face').remove();
        $('#picture').faceDetection({
            complete: function(face) {
                console.log(face);

                for (var i = 0; i < face.length; i++) {
                    $('<div>', {
                            'class': 'face',
                            'css': {
                                'position': 'absolute',
                                'left': face[i].x * face[i].scaleX + 'px',
                                'top': face[i].y * face[i].scaleY + 'px',
                                'width': face[i].width * face[i].scaleX + 'px',
                                'height': face[i].height * face[i].scaleY + 'px'
                            }
                        })
                        .insertAfter(this);
                }
            },
            error: function(code, msg) {
                alert('Error: ' + message);
            }
        });
    });
});