let imageURL;

    function submitHandler(){
        console.log("click");
const fileInput = document.getElementById('fileInput');
        console.log(fileInput.files);
        const image = fileInput.files[0];

        // Multipart file
        const formData = new FormData();
        formData.append('image_file', image);
        formData.append('size', 'auto');

        const apiKey = '5c0d5727cbd506a46b654b91f1c8187445a4372e';
        // const apiKey = '2LiDofgci7QP7yfy18A5fZ5k';


        fetch("https://sdk.photoroom.com/v1/segment",{
            method:'POST',
            headers: {
            'X-Api-Key': apiKey,
         },
         body: formData
        })
        .then(function(reponse){
                return reponse.blob()
        })
        .then(function(blob){
                console.log(blob);
                const url = URL.createObjectURL(blob);
                imageURL = url;
                const img = document.createElement('img');
                img.src = url;
                document.body.appendChild(img);
        })
        .catch();
    }

   function downloadFile(){
    var a = document.createElement('a'); 
        a.href = imageURL;
        a.download = 'download.jpeg';
        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);
   }