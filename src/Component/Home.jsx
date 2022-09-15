import { useEffect } from "react";

function Home() {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=287fb4048ebbdd4594a446aa206cb99f"
    );

    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(36.3495, 127.3768), //좌표설정
          level: 5,
        };
        const map = new kakao.maps.Map(mapContainer, options); //맵생성
        //마커설정
        const markerPosition = new kakao.maps.LatLng(36.3495, 127.3768);
        const markerPosition1 = new kakao.maps.LatLng(36.3465, 127.3868);
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        const marker1 = new kakao.maps.Marker({
          position: markerPosition1,
        });
        marker.setMap(map);
        marker1.setMap(map);
      });
    });
  }, []);

  return (
    <div className="App">
      <div id="map" className="map" />
    </div>
  );
}

export default Home;
