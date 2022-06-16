import React from "react";
import Cards from "../Cards";

function WebsiteList() {
  return (
    <>
      <Cards />
    </>
  );
}
function Lrytas() {
  window.location.href = "https://lrytas.lt";
  return null;
}
function Lrt() {
  window.location.href = "https://lrt.lt";
  return null;
}
function Alfa() {
  window.location.href = "https://alfa.lt";
  return null;
}
function Delfi() {
  window.location.href = "https://delfi.lt";
  return null;
}
function Skelbiu() {
  window.location.href = "https://skelbiu.lt";
  return null;
}

export { WebsiteList, Lrytas, Lrt, Alfa, Delfi, Skelbiu };
