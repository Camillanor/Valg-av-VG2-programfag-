document.addEventListener("DOMContentLoaded", function() {

  const vg2 = {
    realfag: [
      "Biologi 1",
      "Fysikk 1",
      "Kjemi 1",
      "Teknologi og forskningslære 1",
      "Matematikk R1"
    ],
    sso: [
      "Engelsk 1",
      "Entreprenørskap og bedriftsutvikling 1",
      "Markedsføring og ledelse 1",
      "Politikk og menneskerettigheter 1",
      "Psykologi 1",
      "Rettslære 1",
      "Samfunnsøkonomi 1",
      "Sosiologi og sosialantropologi 1",
      "Medier og informasjonskunnskap 1",
      "Matematikk R1"
    ]
  };

  const vg3 = {
    realfag: {
      "Biologi 1": "Biologi 2",
      "Fysikk 1": "Fysikk 2",
      "Kjemi 1": "Kjemi 2",
      "Teknologi og forskningslære 1": "Teknologi og forskningslære 2",
      "Matematikk R1": "Matematikk R2"
    },
    sso: {
      "Engelsk 1": "Engelsk 2",
      "Entreprenørskap og bedriftsutvikling 1": "Entreprenørskap og bedriftsutvikling 2",
      "Markedsføring og ledelse 1": "Markedsføring og ledelse 2",
      "Politikk og menneskerettigheter 1": "Politikk og menneskerettigheter 2",
      "Psykologi 1": "Psykologi 2",
      "Rettslære 1": "Rettslære 2",
      "Samfunnsøkonomi 1": "Samfunnsøkonomi 2",
      "Sosiologi og sosialantropologi 1": "Sosialkunnskap 2",
      "Medier og informasjonskunnskap 1": "Medier og informasjonskunnskap 2",
      "Matematikk R1": "Matematikk R2"
    }
  };

  const vg3Fritt = ["Psykologi 2", "Sosialkunnskap 2", "Biologi 2", "Teknologi og forskningslære 2"];

  const fagInfo = {
    "Biologi 1": { link: "https://www.udir.no/lk20/bio01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Biologi 1 gir innsikt i natur, økologi, genetikk og cellebiologi. Viktig for medisinstudier og naturvitenskapelige fag." },
    "Fysikk 1": { link: "https://www.udir.no/lk20/fys01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Fysikk 1 lærer grunnleggende mekanikk, energi og elektrisitet. Nødvendig for fysikk-, ingeniør- og medisinstudier. Gir 0,25 realfagspoeng som kan øke karaktersnittet." },
    "Kjemi 1": { link: "https://www.udir.no/lk20/kem01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Kjemi 1 dekker stoffers egenskaper og kjemiske reaksjoner. Nødvendig for medisin, odontologi og ingeniørstudier. Gir 0,25 realfagspoeng." },
    "Teknologi og forskningslære 1": { link: "https://www.udir.no/lk20/tfo01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Introduksjon til teknologiske prosesser og vitenskapelig metode. Nyttig for ingeniørfag og teknologistudier." },
    "Matematikk R1": { link: "https://www.udir.no/lk20/mat01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Matematikk R1 gir grunnlag for R2, ingeniørfag, økonomi og realfag. Gir 0,25 realfagspoeng. Matematikk R1 anbefales i utgangspunktet for elever med matematikk 1T. Elever med Matematikk 1P bør ha karakter 5 eller 6 i 1P for å velge R1." },
    "Matematikk 2P": { link: "https://www.udir.no/lk20/mat02-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Matematikk 2P bygger på 1P og gir praktisk matematikk for samfunnsfag og økonomi. Gir ikke realfagspoeng, men gir nødvendig kompetanse for videre økonomi- og samfunnsfag." },
    "Engelsk 1": { link: "https://www.udir.no/lk20/eng01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Engelsk 1 utvikler språkferdigheter og kommunikasjon. Viktig for studier som krever gode språkferdigheter." },
    "Entreprenørskap og bedriftsutvikling 1": { link: "https://www.udir.no/lk20/eb01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Lærer om forretningsutvikling, økonomi og entreprenørskap. Nyttig for økonomi- og ledelsesfag." },
    "Markedsføring og ledelse 1": { link: "https://www.udir.no/lk20/ml01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Fokus på markedsføring, ledelse og strategi. Nyttig for økonomi- og bedriftsstudier." },
    "Politikk og menneskerettigheter 1": { link: "https://www.udir.no/lk20/pom01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Gir forståelse for politikk, demokrati og menneskerettigheter. Viktig for samfunnsfag og jus." },
    "Psykologi 1": { link: "https://www.udir.no/lk20/psy01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Introduksjon til psykologiske teorier og menneskelig atferd. Nyttig for helse- og sosialfag." },
    "Rettslære 1": { link: "https://www.udir.no/lk20/ret01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Gir grunnleggende kunnskap om lover og rettssystemet. Nyttig for jus og samfunnsstudier." },
    "Samfunnsøkonomi 1": { link: "https://www.udir.no/lk20/so01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Økonomi og samfunnsanalyse. Viktig for økonomi- og samfunnsstudier." },
    "Sosiologi og sosialantropologi 1": { link: "https://www.udir.no/lk20/sso01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Studerer samfunn, kultur og menneskelig samhandling. Nyttig for sosialfag." },
    "Medier og informasjonskunnskap 1": { link: "https://www.udir.no/lk20/mik01-02/kompetansemaal-og-vurdering/kv538?lang=nob", forklaring: "Mediekunnskap og informasjonsanalyse. Viktig for journalistikk, kommunikasjon og samfunnsfag." }
  };

  // Render VG2-programfag
  const container = document.getElementById("programfag");
  Object.entries(vg2).forEach(([linje, fag]) => {
    container.innerHTML += `<h3>${linje === "realfag" ? "Realfag" : "SSØ (Språk, samfunnsfag og økonomi)"}</h3>`;
    fag.filter(f => f !== "Matematikk R1").forEach(f => {
      container.innerHTML += `<label><input type="checkbox" value="${f}" data-linje="${linje}">${f}</label>`;
    });
  });

  window.visResultat = function() {
    const checked = [...document.querySelectorAll("input[type=checkbox]:checked")];
    const math = document.querySelector("input[name=math]:checked");

    if (checked.length !== 3) { alert("Du må velge akkurat 3 programfag."); return; }
    if (!math) { alert("Du må velge enten Matematikk R1 eller 2P."); return; }

    const valgtRealfag = checked.filter(c => vg2.realfag.includes(c.value)).map(c => c.value);
    const valgtSSO = checked.filter(c => vg2.sso.includes(c.value)).map(c => c.value);

    let linjeID = "";
    if (valgtRealfag.length >= 2) linjeID = "Realfag";
    else if (valgtSSO.length >= 2) linjeID = "SSØ";
    else linjeID = "Blandet";

    let beskjed = "";
    if (linjeID === "Realfag") beskjed = `Du har valgt ${valgtRealfag.length} Realfag, ${valgtSSO.length} SSØ-fag og Matematikk ${math.value}. Du kommer dermed til å gå på Realfag i VG2 og VG3. Minst 2 av dine Realfag må du ta videre til VG3.`;
    else if (linjeID === "SSØ") beskjed = `Du har valgt ${valgtSSO.length} SSØ-fag og ${valgtRealfag.length} Realfag, samt Matematikk ${math.value}. Du kommer dermed til å gå på SSØ (Språk, samfunnsfag og økonomi) i VG2 og VG3. Minst 2 av dine SSØ-fag må du ta videre til VG3.`;
    else beskjed = "Du har valgt fag fra begge linjer. Minst 2 fag fra én linje må du ta videre til VG3.";

    // VIS VG2-FAG MED INFO
    let vg2Html = "<h3>Dine valgte VG2-programfag:</h3>";
    checked.forEach(f => {
      const info = fagInfo[f.value];
      if(info){
        vg2Html += `<p><strong>${f.value}</strong><br>
          <a href="${info.link}" target="_blank">Her kan du lese kompetansemålene</a><br>
          ${info.forklaring}</p>`;
      } else {
        vg2Html += `<p><strong>${f.value}</strong><br>Info om dette faget er ikke tilgjengelig.</p>`;
      }
    });

    // legg til mattevalg med korrekt nøkkel
    const mathFag = "Matematikk " + math.value;
    const mathInfo = fagInfo[mathFag];
    if(mathInfo){
      vg2Html += `<p><strong>${mathFag}</strong><br>
        <a href="${mathInfo.link}" target="_blank">Her kan du lese kompetansemålene</a><br>
        ${mathInfo.forklaring}</p>`;
    } else {
      vg2Html += `<p><strong>${mathFag}</strong><br>Info om dette faget er ikke tilgjengelig.</p>`;
    }

    vg2Html += `<p>${beskjed}<br><strong>Her er mulige kombinasjoner av fag du kan velge videre i VG3:</strong></p>`;

    // Generer VG3 kombinasjoner
    let vg3LinjeFag = [];
    if (linjeID === "Realfag") vg3LinjeFag = valgtRealfag.map(f => vg3.realfag[f]);
    else if (linjeID === "SSØ") vg3LinjeFag = valgtSSO.map(f => vg3.sso[f]);
    else vg3LinjeFag = [...valgtRealfag.map(f => vg3.realfag[f]), ...valgtSSO.map(f => vg3.sso[f])];

    if (math.value === "R1" && !vg3LinjeFag.includes("Matematikk R2")) vg3LinjeFag.push("Matematikk R2");
    vg3LinjeFag = vg3LinjeFag.filter(Boolean);

    const kombinasjoner = [];
    for (let i=0;i<vg3LinjeFag.length;i++){
      for (let j=i+1;j<vg3LinjeFag.length;j++){
        const base = [vg3LinjeFag[i], vg3LinjeFag[j]];
        [...vg3LinjeFag.filter(f => !base.includes(f)), ...vg3Fritt].forEach(t=>{
          if(!base.includes(t)) kombinasjoner.push([...base, t]);
        });
      }
    }

    const sett = new Set();
    const unike = [];
    kombinasjoner.forEach(k=>{
      const key = k.sort().join("|");
      if(!sett.has(key)){ unike.push(k); sett.add(key); }
    });

    let listeHtml = "<ul style='margin-top:10px'>";
    unike.forEach(k=>{ listeHtml += `<li style="margin-bottom:8px">${k.join(", ")}</li>`; });
    listeHtml += "</ul>";

    document.getElementById("result").innerHTML = vg2Html + listeHtml;
  }

});