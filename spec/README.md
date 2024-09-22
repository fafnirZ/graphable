# Specifications

## nodes
```
{
  "id": string
  "tags": Tags[]
}
```

## edges
```
{
  "src": node.id
  "dest": node.id
  "tags": Tags[]
}
```

## tags
```
{
  "id": string
  "description": optional[string]
}
```
