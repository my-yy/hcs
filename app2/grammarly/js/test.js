const str = `
Bain et al.~\\shortcite{358_frozen} used a space-tim
In VATT~\\cite{p364_vatt}, a convolution-free transformer learns cross-modal representations among audio, visual, and text modalities.
Shvetsova et al.~\\cite{p411_everything} proposed a modality agnostic fusion transformer with a combinatorial loss,
A $1+1=2$ B $2+2=c$
`
const regexp = /~\\shortcite{.*?}/g;
const array = [...str.matchAll(regexp)].map(arr => arr[0])
console.log(array)
