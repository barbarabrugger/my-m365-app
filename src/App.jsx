import { useState, useEffect } from "react";
import { Providers, ProviderState } from "@microsoft/mgt-element";
import { FileList, Login } from "@microsoft/mgt-react";

function useIsSignedIn() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    };
  }, []);

  return [isSignedIn];
}

function App() {
  const [isSignedIn] = useIsSignedIn();
  const [selectedFolder, setSelectedFolder] = useState("01E4AZNEYNO3JLYGUNUJGYVXK5NBG3POWV");
  const [parentFolder, setParentFolder] = useState("01E4AZNE56Y2GOVW7725BZO354PWSELRRZ")


  return (
    <div className="App">
      <header>
        <Login />
      </header>
      <div>
        {isSignedIn && (
          <>
            <FileList
              id="file-list"
              itemId={selectedFolder}
              enableFileUpload={true}
              itemClick={(e) => 
                e.detail.folder && setSelectedFolder(e.detail.id)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
