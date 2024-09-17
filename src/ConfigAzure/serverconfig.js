import { BlobServiceClient } from "@azure/storage-blob"
import { Keys } from "./keys"

export const CreateImageFile = async (image) => {
  try{
    // Criando o hash do blob
    const blobName = new Date().toISOString() + "." + image.type.split("/")[1];

    // Criando a conexão com o cliente do blob
    const blobService = new BlobServiceClient(
    `https://${Keys.storageAccountName}.blob.core.windows.net?${Keys.sasToken}`
    );
  
    // Capturando o container
    const containerClient = blobService.getContainerClient(Keys.containerName);
    
    
    // Criando um novo blob para o arquivo
    const blobClient = containerClient.getBlockBlobClient(blobName);

    // Definindo o Content-Type correto (de acordo com o tipo do arquivo)
    const options = {
      blobHTTPHeaders: {
        blobContentType: image.type
      }
    };

    // Inserindo o arquivo no blob
    await blobClient.uploadData(image, options);

    // Devolvendo a url de criação do blob
    return `https://${Keys.storageAccountName}.blob.core.windows.net/${Keys.containerName}/${blobName}`;

  }catch{
    return false;
  }
}