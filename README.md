# Global-Solution

Alpha4 – Monitoramento Inteligente de Áreas Críticas
Descrição do Projeto
O Alpha4 é uma plataforma de monitoramento inteligente que integra imagens de satélite, inteligência artificial e análise geoespacial para detectar rapidamente ocupações irregulares, desmatamento ilegal e mineração ilegal em todo o Brasil.

A solução busca reduzir drasticamente o tempo de resposta dos órgãos fiscalizadores (para algo entre 24 e 48 horas), permitindo ações mais rápidas e eficientes em áreas urbanas críticas, biomas como Amazônia e Cerrado, e regiões afetadas por garimpo ilegal.

O projeto foi desenvolvido como parte da Global Solution 2026/1 da FIAP, conectando a economia espacial com problemas reais na Terra, com foco especial em cidades e comunidades sustentáveis, proteção ambiental e combate à ilegalidade.

Problema e Motivação
Contexto Urbano – Favelas e APPs
O Brasil possui mais de 16.400 favelas e comunidades urbanas, abrigando cerca de 16,4 milhões de pessoas (8,1% da população).
Muitas dessas comunidades crescem de forma acelerada e desordenada, frequentemente invadindo Áreas de Preservação Permanente (APPs) urbanas, como:
Margens de rios
Encostas de morros
Isso gera:
Desmatamento local
Aumento do risco de deslizamentos e enchentes
Ocupação irregular em áreas de alto risco
Com a nossa solução, os agentes fiscalizadores podem responder entre 24 e 48 horas, reduzindo cerca de 80% a 90% das invasões desse tipo em APPs urbanas.

Desmatamento Ilegal – Amazônia e Cerrado
Segundo o MapBiomas, cerca de 90% do desmatamento no Brasil é ilegal.
Aproximadamente metade do desmatamento na Amazônia ocorre em:
Terras públicas não autorizadas
Áreas protegidas
Criminosos desmatam para:
Dar aparência de “terra produtiva”
Vender terras ilegalmente
Soluções atuais de monitoramento existem, mas muitas são ineficientes por:

Dependência de boas condições climáticas (nuvens atrapalham)
Baixa velocidade de processamento de dados
Nossa solução busca melhorar o tempo de resposta dos agentes, com estimativa de melhoria de 50% a 70% nos parâmetros de impedimento da ilegalidade.

Mineração Ilegal
A mineração ilegal depende de uma logística pesada:
Escavadeiras, motores, combustível, mercúrio
Impactos:
Desmatamento de florestas
Degradação do solo
Poluição de rios e lençóis freáticos
Com análise de imagens automatizada e dados de radar, nossa solução identifica:
Solo exposto
Clareiras
Alterações em rios
O objetivo é reduzir em 60% a 80% os casos de mineração ilegal que hoje são detectados tardiamente.

Como a Solução Funciona
Satélites Utilizados
Sentinel-2
Imagens ópticas de alta resolução para:

Detectar início de invasões em território
Identificar clareiras e desmatamento
Monitorar queimadas e mudanças na vegetação
Sentinel-1
Radar que “enxerga” através das nuvens, permitindo:

Monitoramento contínuo mesmo com cobertura de nuvens
Detecção de mudanças estruturais no solo e na vegetação
Complemento às imagens ópticas, reduzindo a dependência do clima

Sistema de Identificação
Comparação Temporal de Imagens
A IA compara imagens da mesma região em datas diferentes, detectando mudanças relevantes não autorizadas pelos responsáveis.

NDVI (Índice de Vegetação por Diferença Normalizada)

Os satélites capturam luz no infravermelho próximo, que é fortemente refletida por vegetação saudável.
Scripts em Python ou algoritmos de IA calculam o NDVI da área monitorada.
Quedas bruscas de NDVI de uma semana para outra indicam:
Remoção de vegetação
Desmatamento
Abertura de clareiras para habitações ou mineração
Análise de Solo Exposto e Relevo

Mineração ilegal e garimpo geram forte escavação do solo e alteração de rios.
O algoritmo identifica:
Assinaturas de “Solo Exposto” (lama, áreas sem vegetação)
Alterações em cursos d’água
Padrões típicos de garimpo
Geofencing – Cruzamento com Polígonos Oficiais

O sistema salva coordenadas (latitude e longitude) de:
Áreas de Preservação Permanente (APPs)
Terras públicas
Áreas protegidas
Apenas mudanças dentro desses perímetros geram alertas prioritários.

Sistema de Alerta
Ao identificar uma incoerência com a normalidade:
O sistema gera um alerta com:
Imagem “antes e depois”
Coordenadas geográficas
Tipo de alteração detectada
Profissionais da central revisam e confirmam a divergência.
Um alerta é enviado diretamente ao órgão responsável (municipal, estadual ou federal).
Objetivo: corrigir a irregularidade o mais rápido possível, com dados confiáveis e georreferenciados.

Tecnologias Utilizadas
Front-End
HTML5
CSS3
JavaScript (Vanilla, sem frameworks externos)
Arquitetura e Organização
Estrutura de pastas:
/css – arquivos de estilo (por exemplo, style.css)
/js – scripts JavaScript (por exemplo, script.js)
/assets – imagens, ícones, logos e diagramas
Arquivos .html na raiz do projeto
Dados e Processamento (Conceito da Solução)
Satélites Sentinel-1 e Sentinel-2 (dados de observação da Terra)
Algoritmos de IA e análise de imagens:
Detecção de mudança (change detection)
Cálculo de NDVI
Identificação de solo exposto e alterações em rios
Geofencing com polígonos oficiais:
APPs
Terras públicas
Áreas protegidas
Back-End (conceito / integração futura)
[A definir pelo grupo, ex.: Python (Flask/Django), Node.js ou Java com Spring Boot para futuramente receber os dados, processar alertas e expor APIs para o front-end.]