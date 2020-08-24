function mediaHandler(postID) {
    function createFileName() {
        //grab just the names
        let designersNamesArr = Object.values(designers);
        designersNamesArr = designersNamesArr.map(element => element.name);
        //concat into a string
        let newFileName = year.name + '-' + title + '-' + designersNamesArr.join('-');
        newFileName = newFileName.normalize(); // replace non-uploadable characters with latin chars
        newFileName = newFileName.replace(/[/\\?%*:|"<>]/g, '-'); // get rid of forbidden chars
        newFileName = newFileName.replace(/[\s]/g, '_'); //replace all spaces with underscores
        return newFileName;
    }
    function convertBlobtoFile(name, mediaObject) {
        // check if blob file
        if (mediaObject.file instanceof Blob) {
            // get file ending
            let ending = mediaObject.file.type;
            ending = ending.replace('image/', '')
            // Convert blob to file. WP only allows file upload
            mediaObject.file = new File([mediaObject.file], `${name}.${ending}`);
            return mediaObject
        } else { return mediaObject; }
    }
    function createFormData(mediaObject, name, id) {
        const formData = new FormData();
        formData.append('file', mediaObject.file);
        formData.append('title', `${name}-${mediaObject.id}`);
        formData.append('post', id); // associated post ID
        formData.append('author', Object.keys(designers)[0]);
        formData.append('comment_status', 'closed');
        return formData;
    }
    async function uploadImage(formData) {
        const response = await fetch(`${wpApiSettings.root}wp/v2/media`, {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'X-WP-Nonce': wpApiSettings.nonce,
            },
            body: formData,
        });/*end fetch */
        if (!response.ok) {
            // oups! something went wrong
            console.log(response);
            return;
        }

        const posts = await response.json();
        console.log(posts);
    }

    attachmentOrder.forEach(item => {
        const fileType = checkFileType(item);

        if (fileType == 'image') {
            //select this file object from redux store
            const mediaObject = media[item];
            const filename = createFileName();
            const fileObject = convertBlobtoFile(filename, mediaObject);
            const data = createFormData(fileObject, filename, postID);
            uploadImage(data);
        }
    })
}

/**
 * WHERE I RAN INTO PROBLEMS:
 *
 * In the request, it should be 'body' instead of 'data'
 *
 * Leave out Content-Type from the header.
 *  It will be assigned automatically if you are sending 'formData'
 *  to be 'multipart/form-data'
 *
 * You will recieve at 500 internal error saying 'file type invalid' if sending a blob
 *  The type needs to be converted to new File([blob], name.ext)
 *
 * The formData can attach all the required fields in the db by appending it with arguments:
 * https://developer.wordpress.org/rest-api/reference/media/#create-a-media-item
 *
 * If you want to add custom meta then you must register fields in php
 * to rest with register_post_meta()
 * https://developer.wordpress.org/reference/functions/register_post_meta/
 *
 *  register_post_meta('project', 'mentions', array(
        'show_in_rest' => true,
        'single' => false,
        'type' => 'array',
    ));
 *
 * Inspirational Guide:
 * https://www.edmundcwm.com/uploading-media-using-the-wp-rest-api-and-javascript/
 *
 *
 */