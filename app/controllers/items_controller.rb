class ItemsController < ApplicationController

  def create
    @checklist = Checklist.find_by_id(params[:id])
    @item = Item.new(params[:item])
    @item.checklist = @checklist
    @item.position = @checklist.items.length
    if @item.save
      redirect_to checklist_url(@checklist)
    else
      flash[:notices] = @item.errors.full_messages
      redirect_to checklist_url(@checklist)
    end
  end

  def update
    @item = Item.find_by_id(params[:id])
    @item.checked = !@item.checked
    @item.save
    redirect_to checklist_url(@item.checklist)
  end

  def destroy
    @item = Item.find_by_id(params[:id])
    checklist = @item.checklist
    @item.destroy
    redirect_to checklist_url(checklist)
  end

end
