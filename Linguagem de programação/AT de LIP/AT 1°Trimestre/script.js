//Entrada
alert("Responda apenas com S e N, sendo S(sim) e N(não)")
alert("Escolha um animal: Pato, Sapo, Axolote, Macaco, Hipopótamo, Ornitorrinco ou Guepardo")
var inicial = prompt("Seu animal é um mamífero?")
var ganhou = "Você pensou que podia me vencer?"
var perdeu = "Puxa, dessa vez você ganhou!"
var i = inicial
//Processamento
//Saída]
if (i == "s" || i == "S" || i == "n" || i == "N") {
    if(inicial == "N" || inicial == "n"){
        var anfíbio = prompt("Seu animal é um anfíbio?")
        if(anfíbio == "N" || anfíbio == "n"){
            var bípede = prompt("Seu animal é um bípede?")
            if(bípede == "S" || bípede == "s"){
                var ovíparos = prompt("Seu animal coloca ovos?")
                if(ovíparos == "S" || ovíparos == "s"){
                    var habitat = prompt("Seu animal vive tanto na água quanto na terra?")
                    if(habitat == "S" || habitat == "s"){
                        var língua = prompt("Seu animal é conhecido por ter uma língua longa?")
                        if(língua == "N" || língua == "n"){
                            var penas = prompt("Seu animal tem penas?")
                            if(penas == "S" || penas == "s"){
                                var pato = prompt("Seu animal é o Pato?")
                                if(pato == "S" || pato == "s"){
                                    alert(ganhou)
                                }
                                else if(pato == "N" || pato == "n"){
                                    alert(perdeu)
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }else{
                            alert("Eu não consigo identificar qual animal vc escolheu...")
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }else{
                    alert("Eu não consigo identificar qual animal vc escolheu...")
                }
            }else{
                alert("Eu não consigo identificar qual animal vc escolheu...")
            }
        }
        else if(anfíbio == "S" || anfíbio == "s"){
            bípede = prompt("Seu animal é um bípede?")
            if(bípede == "N" || bípede == "n"){
                var quadrupede = prompt("Seu animal é um quadrupede?")
                if(quadrupede == "S" || quadrupede == "s"){
                    ovíparos = prompt("Seu animal coloca ovos?")
                    if(ovíparos == "S" || ovíparos == "s"){
                        habitat = prompt("Seu animal vive tanto na água quanto na terra?")
                        if(habitat == "S" || habitat == "s"){
                            língua = prompt("Seu animal é conhecido por ter uma língua longa?")
                            if(língua == "S" || língua == "s"){
                                var sapo = prompt("Seu animal é o Sapo?")
                                if(sapo == "S" || sapo == "s"){
                                    alert(ganhou)
                                }
                                else if(sapo == "N" || sapo == "n"){
                                    alert(perdeu)
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }
                        else if(habitat == "N" || habitat == "n"){
                            var aquático = prompt("Seu animal é aquático?")
                            if(aquático == "S" || aquático == "s"){
                                var axolote = prompt("Seu animal é o Axolote?")
                                if(axolote == "S" || axolote == "s"){
                                    alert(ganhou)
                                }
                                else if(axolote == "N" || axolote == "n"){
                                    alert(perdeu)
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }else{
                    alert("Eu não consigo identificar qual animal vc escolheu...")
                }
            }else{
                alert("Eu não consigo identificar qual animal vc escolheu...")
            }
        }
    }
    else if(inicial == "S" || inicial == "s"){
        var reprodução = prompt("Seu animal passa por gestações?")
        if(reprodução == "S" || reprodução == "s"){
            quadrupede = prompt("Seu animal é um quadrupede?")
            if(quadrupede == "S" || quadrupede == "s"){
                var onívoro = prompt("Seu animal é onívoro?")
                if(onívoro == "S" || onívoro == "s"){
                    habitat = prompt("Seu animal vive tanto na água quanto na terra?")
                    if(habitat == "S" || habitat == "s"){
                        var predador = prompt("Seu animal é um predador?")
                        if(predador == "S" || predador == "s"){
                            var rápido = prompt("Seu animal é conhecido por ser o animal mais rápido do mundo terrestre?")
                            if(rápido == "N" || rápido == "n"){
                                var dedos = prompt("Seu animal tem 5 dedos?")
                                if(dedos == "N" || dedos == "n"){
                                    var cor = prompt("Seu animal é cinza?")
                                    if(cor == "S" || cor == "s"){
                                        var hipopótamo = prompt("Seu animal é o Hipopótamo?")
                                        if(hipopótamo == "S" || hipopótamo == "s"){
                                            alert(ganhou)
                                        }
                                        else if (hipopótamo == "N" || hipopótamo == "n"){
                                            alert(perdeu)
                                        }
                                    }else{
                                        alert("Eu não consigo identificar qual animal vc escolheu...")
                                    }
                                }else{
                                    alert("Eu não consigo identificar qual animal vc escolheu...")
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }else{
                            alert("Eu não consigo identificar qual animal vc escolheu...")
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }
                else if(onívoro == "N" || onívoro == "n"){
                    var carnívoro = prompt("Seu animal é carnívoro?")
                    if(carnívoro == "S" || carnívoro == "s"){
                        predador = prompt("Seu animal é um predador?")
                        if(predador == "S" || predador == "s"){
                            rápido = prompt("Seu animal é conhecido por ser o animal mais rápido do mundo terrestre?")
                            if(rápido == "S" || rápido == "s"){
                                var guepardo = prompt("Seu animal é o Guepardo?")
                                if(guepardo == "S" || guepardo == "s"){
                                    alert(ganhou)
                                }
                                else if(guepardo == "N" || guepardo == "n"){
                                    alert(perdeu)
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }else{
                            alert("Eu não consigo identificar qual animal vc escolheu...")
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }
            }
            else if(quadrupede == "N" || quadrupede == "n"){
                bípede = prompt("Seu animal é um bípede?")
                if(bípede == "S" || bípede == "s"){
                    onívoro = prompt("Seu animal é onívoro?")
                    if(onívoro == "S" || onívoro == "s"){
                        habitat = prompt("Seu animal vive tanto na água quanto na terra?")
                        if(habitat == "N" || habitat == "n"){
                            var predador = prompt("Seu animal é um predador?")
                            if(predador == "S" || predador == "s"){
                                var rápido = prompt("Seu animal é conhecido por ser o animal mais rápido do mundo terrestre?")
                                if(rápido == "N" || rápido == "n"){
                                    var dedos = prompt("Seu animal tem 5 dedos?")
                                    if(dedos == "S" || dedos == "s"){
                                        var macaco = prompt("Seu animal é o Macaco?")
                                        if(macaco == "S" || macaco == "s"){
                                            alert(ganhou)
                                        }
                                        else if(macaco == "N" || macaco == "n"){
                                            alert(perdeu)
                                        }
                                    }else{
                                        alert("Eu não consigo identificar qual animal vc escolheu...")
                                    }
                                }else{
                                    alert("Eu não consigo identificar qual animal vc escolheu...")
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }else{
                            alert("Eu não consigo identificar qual animal vc escolheu...")
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }else{
                    alert("Eu não consigo identificar qual animal vc escolheu...")
                }
            }
        }
        else if(reprodução == "N" || reprodução == "n"){
            ovíparos = prompt("Seu animal coloca ovos?")
            if(ovíparos == "S" || ovíparos == "s"){
                habitat = prompt("Seu animal vive tanto na água quanto na terra?")
                if(habitat == "S" || habitat == "s"){
                    língua = prompt("Seu animal é conhecído por ter uma língua longa?")
                    if(língua == "N" || língua == "n"){
                        penas = prompt("Seu animal tem penas?")
                        if(penas == "N" || penas == "n"){
                            aquático = prompt("Seu animal é aquático?")
                            if(aquático == "N" || aquático == "n"){
                                predador = prompt("Seu animal é um predador?")
                                if(predador == "N" || predador == "n"){
                                    var venenoso = prompt("Seu animal é venenoso?")
                                    if(venenoso == "S" || venenoso == "s"){
                                        var ornitorrinco = prompt("Seu animal é o Ornitorrinco?")
                                        if(ornitorrinco == "S" || ornitorrinco == "s"){
                                            alert(ganhou)
                                        }
                                        else if(ornitorrinco == "N" || ornitorrinco == "n"){
                                            alert(perdeu)
                                        }
                                    }else{
                                        alert("Eu não consigo identificar qual animal vc escolheu...")
                                    }
                                }else{
                                    alert("Eu não consigo identificar qual animal vc escolheu...")
                                }
                            }else{
                                alert("Eu não consigo identificar qual animal vc escolheu...")
                            }
                        }else{
                            alert("Eu não consigo identificar qual animal vc escolheu...")
                        }
                    }else{
                        alert("Eu não consigo identificar qual animal vc escolheu...")
                    }
                }else{
                    alert("Eu não consigo identificar qual animal vc escolheu...")
                }
            }else{
                alert("Eu não consigo identificar qual animal vc escolheu...")
            }
        }
    }
}else{
    alert("Eu não consigo identificar qual animal vc escolheu...")
}
