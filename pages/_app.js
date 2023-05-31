import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
const initialLights = [
  { id: 1, name: "Living Room", on: false },
  { id: 2, name: "Kitchen", on: false },
  { id: 3, name: "Bedroom", on: false },
  { id: 4, name: "Bathroom", on: false },
  { id: 5, name: "Garage", on: false },
  { id: 6, name: "Porch", on: false },
  { id: 7, name: "Garden", on: false },
  { id: 8, name: "Office", on: false },
];
export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  function handleToggleLight(id) {
    setLights((lights) => {
      return lights.map((light) => {
        if (light.id === id) {
          return { ...light, on: !light.on };
        }
        return light;
      });
    });
  }
  function handleAllLightsOn() {
    setLights((lights) => {
      return lights.map((light) => {
        return { ...light, on: true };
      });
    });
  }
  function handleAllLightsOff() {
    setLights((lights) => {
      return lights.map((light) => {
        return { ...light, on: false };
      });
    });
  }
  const turnedOnLights = lights.filter((light) => light.on);

  return (
    <Layout isDimmed={turnedOnLights.length === 0}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={handleToggleLight}
        lightsOn={turnedOnLights.length}
        allLightsOn={handleAllLightsOn}
        allLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
