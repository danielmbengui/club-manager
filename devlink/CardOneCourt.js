"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function CardOneCourt({
  as: _Component = _Builtin.Block,
  courtName = "Nom du terrain",
  openTime = "-",
  closeTime = "-",
  siteName = "Nom du site",
  address = "Adresse",
}) {
  return (
    <_Component className="card_line court" tag="div" wized="court_list_item">
      <_Builtin.Block className="court_flex" tag="div">
        <_Builtin.Block className="court_right-content" tag="div">
          <_Builtin.Block className="court-name" tag="div">
            <_Builtin.HtmlEmbed
              className="icon-1x1-small"
              value="%3Csvg%20width%3D%22auto%22%20height%3D%22auto%22%20viewBox%3D%220%200%2011%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0%200.464286L0%2012.5357C0%2012.6589%200.0643849%2012.7769%200.17899%2012.864C0.293596%2012.9511%200.449034%2013%200.611111%2013H10.3889C10.551%2013%2010.7064%2012.9511%2010.821%2012.864C10.9356%2012.7769%2011%2012.6589%2011%2012.5357L11%200.464286C11%200.34115%2010.9356%200.223057%2010.821%200.135986C10.7064%200.0489159%2010.551%200%2010.3889%200H0.611111C0.449034%200%200.293596%200.0489159%200.17899%200.135986C0.0643849%200.223057%200%200.34115%200%200.464286ZM1.22222%204.17857H4.88889L4.88889%208.82143H1.22222L1.22222%204.17857ZM1.22222%2012.0714L1.22222%209.75H9.77778V12.0714H1.22222ZM9.77778%208.82143H6.11111L6.11111%204.17857H9.77778V8.82143ZM9.77778%200.928572V3.25H1.22222L1.22222%200.928572H9.77778Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
            />
            <_Builtin.Block tag="div" wized="court_name">
              {courtName}
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block className="court-image_box" tag="div">
            <_Builtin.Image
              className="court-image"
              width="568"
              height="auto"
              loading="lazy"
              wized="court_photo"
              alt=""
              src="https://cdn.prod.website-files.com/64ad6274d8c64f92f123999e/65da7dc0ff5fcdc97cf92bcc_img-blog-correction4.webp"
            />
          </_Builtin.Block>
          <_Builtin.Block className="details_list" tag="div">
            <_Builtin.Block className="details_row court site-name" tag="div">
              <_Builtin.Block className="court-row-text" tag="div">
                <_Builtin.Block tag="div">{"Site :"}</_Builtin.Block>
                <_Builtin.Block tag="div">{address}</_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="details_row court" tag="div">
              <_Builtin.Block className="court-row-text" tag="div">
                <_Builtin.HtmlEmbed
                  className="icon-court"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">
                  {"Horaire d'ouverture"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block tag="div" wized="court_open_hours">
                {openTime}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className="details_row court" tag="div">
              <_Builtin.Block className="court-row-text" tag="div">
                <_Builtin.HtmlEmbed
                  className="icon-court"
                  value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%22auto%22%20height%3D%22auto%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%3Cpath%20d%3D%22m347.216%20301.211-71.387-53.54V138.609c0-10.966-8.864-19.83-19.83-19.83-10.966%200-19.83%208.864-19.83%2019.83v118.978c0%206.246%202.935%2012.136%207.932%2015.864l79.318%2059.489a19.713%2019.713%200%200%200%2011.878%203.966c6.048%200%2011.997-2.717%2015.884-7.952%206.585-8.746%204.8-21.179-3.965-27.743z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3Cpath%20d%3D%22M256%200C114.833%200%200%20114.833%200%20256s114.833%20256%20256%20256%20256-114.833%20256-256S397.167%200%20256%200zm0%20472.341c-119.275%200-216.341-97.066-216.341-216.341S136.725%2039.659%20256%2039.659c119.295%200%20216.341%2097.066%20216.341%20216.341S375.275%20472.341%20256%20472.341z%22%20fill%3D%22currentColor%22%20opacity%3D%221%22%20data-original%3D%22%23000000%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                />
                <_Builtin.Block tag="div">
                  {"Horaire de fermeture"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block tag="div" wized="court_close_hours">
                {closeTime}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
