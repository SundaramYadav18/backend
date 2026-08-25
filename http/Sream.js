import fs from 'fs';
const readStream = fs.createReadStream('./test.txt');

const writestream=fs.createWriteStream('./output1.txt');
readStream.on('data',(chunk)=>{//-->this will read the data from test.txt file in chunks and it will give the data in buffer format. the .on method is used to listen to the data event which is emitted when the data is available to read. the chunk parameter is the data that is read from the file in buffer format.
    console.log(chunk.toString());
    writestream.write(chunk);//-->this will write the data read from test.txt file to output.txt file in chunks. the .write method is used to write the data to the file.
})

readStream.on('end',()=>{//-->this will be called when the end of the file is reached. the .on method is used to listen to the end event which is emitted when the end of the file is reached.
    console.log('reached at the end of the file');
    writestream.end();//-->this will close the writable stream to the output.txt file. the .end method is used to close the writable stream to the file.
})


// const writestream=fs.createWriteStream('./output.txt');//-->this will create a writable stream to the output.txt file. the .createWriteStream method is used to create a writable stream to the file. the data that is read from the test.txt file will be written to the output.txt file in chunks.
// readStream.pipe(writestream);