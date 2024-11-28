"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardOneSite({
  as: _Component = _Builtin.Block,
  siteName = "Nom du site",
  imageSite = "https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7dc0ff5fcdc97cf92bcc_img-blog-correction4.webp",
  addressSite = "Address",
  nCourts = "0 Terrains",
}) {
  return (
    <_Component
      className="card_line court devlink"
      tag="div"
      wized="site_list_item"
    >
      <_Builtin.Block className="court_flex" tag="div">
        <_Builtin.Block className="court_right-content" tag="div">
          <_Builtin.Block className="court-name" tag="div">
            <_Builtin.HtmlEmbed
              className="icon-1x1-small"
              value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%20class%3D%22%22%3E%3Cg%3E%3Cpath%20d%3D%22M341.476%20338.285c54.483-85.493%2047.634-74.827%2049.204-77.056C410.516%20233.251%20421%20200.322%20421%20166%20421%2074.98%20347.139%200%20256%200%20165.158%200%2091%2074.832%2091%20166c0%2034.3%2010.704%2068.091%2031.19%2096.446l48.332%2075.84C118.847%20346.227%2031%20369.892%2031%20422c0%2018.995%2012.398%2046.065%2071.462%2067.159C143.704%20503.888%20198.231%20512%20256%20512c108.025%200%20225-30.472%20225-90%200-52.117-87.744-75.757-139.524-83.715zm-194.227-92.34a15.57%2015.57%200%200%200-.517-.758C129.685%20221.735%20121%20193.941%20121%20166c0-75.018%2060.406-136%20135-136%2074.439%200%20135%2061.009%20135%20136%200%2027.986-8.521%2054.837-24.646%2077.671-1.445%201.906%206.094-9.806-110.354%20172.918L147.249%20245.945zM256%20482c-117.994%200-195-34.683-195-60%200-17.016%2039.568-44.995%20127.248-55.901l55.102%2086.463a14.998%2014.998%200%200%200%2025.298%200l55.101-86.463C411.431%20377.005%20451%20404.984%20451%20422c0%2025.102-76.313%2060-195%2060z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3Cpath%20d%3D%22M256%2091c-41.355%200-75%2033.645-75%2075s33.645%2075%2075%2075%2075-33.645%2075-75-33.645-75-75-75zm0%20120c-24.813%200-45-20.187-45-45s20.187-45%2045-45%2045%2020.187%2045%2045-20.187%2045-45%2045z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%20class%3D%22%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div" wized="site_name">
              {siteName}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="court-image_box" tag="div">
            <_Builtin.Image
              className="court-image"
              width="568"
              height="auto"
              loading="lazy"
              wized="site_photo"
              alt=""
              src={imageSite}
            />
          </_Builtin.Block>
          <_Builtin.Block className="details_list" tag="div">
            <_Builtin.Block className="details_row court site" tag="div">
              <_Builtin.Block tag="div" wized="site_street">
                {addressSite}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
