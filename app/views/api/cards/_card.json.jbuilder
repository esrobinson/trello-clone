json.(card,
     :id,
     :name,
     :description,
     :due_date,
     :archived,
     :list_id,
     :position,
     :created_at,
     :updated_at)

json.checklists card.checklists do |checklist|
  json.partial! checklist
end
json.comments card.comments do |comment|
  json.partial! comment
end
