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

        const apiKey = '697792feca837a25ec6ef778d44a20361129d4ec';
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
