import React, { useState, ChangeEvent } from "react";

const LandingPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleBackgroundChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setBackgroundImage(imageUrl);
    }
  };

  return (
    <>
      <header
        className="w-full bg-main absolute p-7"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-start">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Foto de perfil"
              className="rounded-full w-40 h-40 object-cover border-2 border-white"
            />
          ) : (
            <div className="rounded-full bg-black w-40 h-40 border-2 border-white" />
          )}
          <div className="flex flex-col">
            <label htmlFor="avatar" className=" flex font-sans text-lg m-1">
              Selecione uma foto:
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
              className="font-sans"
            />
          </div>
        </div>
        <div className="flex flex-col items-end">
          <label htmlFor="background" className="flex font-sans text-lg m-1">
            Escolha um plano de fundo:
          </label>
          <input
            type="file"
            id="background"
            name="background"
            accept="image/png, image/jpeg"
            onChange={handleBackgroundChange}
            className="font-sans"
          />
        </div>
      </header>
    </>
  );
};

export default LandingPage;
