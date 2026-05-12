# Configuração de Download Automático de Mídia

## Como Funciona

Por padrão, o WhaTicket baixa automaticamente todas as mídias (imagens, vídeos, áudios, documentos) recebidas no WhatsApp.

Com a nova configuração `AUTO_DOWNLOAD_MEDIA`, você pode desativar esse comportamento para economizar:
- **Espaço em disco**
- **Largura de banda**
- **Processamento do servidor**

## Como Configurar

### Opção 1: Desativar Download Automático (Recomendado para economizar recursos)

No arquivo `.env`, defina:

```bash
AUTO_DOWNLOAD_MEDIA=false
```

### Opção 2: Manter Download Automático (Padrão)

No arquivo `.env`, defina:

```bash
AUTO_DOWNLOAD_MEDIA=true
```

Ou simplesmente remova/comente a linha para usar o valor padrão.

## O que acontece quando está DESATIVADO?

- As mensagens de mídia serão salvas no banco de dados com o tipo de mídia (ex: `[image]`, `[video]`, `[audio]`)
- O arquivo **NÃO** será baixado automaticamente
- Você economiza espaço em disco e banda
- As mensagens ainda aparecem na interface, mas sem a mídia

## O que acontece quando está ATIVADO?

- Todas as mídias são baixadas automaticamente
- Os arquivos ficam disponíveis na pasta `backend/public/`
- Você pode visualizar as mídias diretamente na interface

## Aplicar as Mudanças

Após alterar o `.env`, reinicie o backend:

```bash
docker-compose restart backend
```

Ou reconstrua tudo:

```bash
docker-compose up -d --build backend
```

## Notas Importantes

⚠️ **Atenção**: 
- Essa configuração afeta apenas **novas mensagens** recebidas após a mudança
- Mensagens antigas que já foram baixadas continuarão disponíveis
- Se você desativar o download e depois reativar, as mensagens antigas **não** serão baixadas retroativamente
