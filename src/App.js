import { useEffect, useState } from "react";
import "./styles.css";

// Importando a configuração do azure
import { CreateImageFile } from "./ConfigAzure/serverconfig";

function App() {
  const [file, setFile] = useState(null)
  const [blob, setBlob] = useState(null)

  const handleUploadFile = async (e) => {
    e.preventDefault();

    try{
      if(file){
        // Enviando a imagem para o armazenamento via blobStorage
        const urlImage = await CreateImageFile(file);
  
        if(urlImage){
          // Salvando a imagem para visualização
          setBlob(urlImage);

        }else{
          alert("Erro ao conectar com o blobStorage");
        }
      }

    }catch{
      alert("Não foi possível salvar o arquivo");
    }
  }

  useEffect(() => {
    setBlob(null)
  }, [file])
  
  return (
    <div className="container">
      <form action="" onSubmit={handleUploadFile} >
        <div className="campo">
          <label className="file-input-label" htmlFor="arquivo">
            {file ? file.name : "Clique aqui para carregar o arquivo desejado"}
          </label>
          <input
            required
            className="file-input"
            type="file"
            id="arquivo"
            accept="image/png, image/jpg, image/jpeg"
            // onChange={handleFileChange}
            onChange={e => setFile( e.target.files[0] )}
          />
        </div>

        <button type="submit" disabled={!file}>
          Enviar arquivo
        </button>
      </form>

      <p>Caminho da imagem : { blob && <a href={blob} target="_blank" rel="noreferrer">link da imagem</a>}</p>
    </div>
  );
}

export default App;
