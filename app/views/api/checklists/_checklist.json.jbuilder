json.(checklist, :id, :name, :position, :card_id, :created_at, :updated_at)
json.items checklist.items do |item|
  json.partial! item
end