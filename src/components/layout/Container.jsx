import MapCs from "/src/components/features/RenderingImages/Map";
import NadeImage from "/src/components/features/RenderingImages/NadeImage";

const Container = () => {
  return (
    <div style={{display: "flex", flexWrap: "wrap", "gap": "2%"}}>
        <div style={{flex: "1 1 48%", boxSizing: "border-box"}}><MapCs /></div>
        <div style={{flex: "1 1 48%", boxSizing: "border-box"}}><NadeImage /></div>
    </div>
  )
}

export default Container