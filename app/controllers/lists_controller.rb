class ListsController < ApplicationController

  def new
    @board = Board.find_by_id(params[:board_id])
    if @board && is_member?(@board, current_user)
      render :new
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def create
    @list = List.new(params[:list])
    @board = Board.find_by_id(params[:board_id])
    @list.board = @board
    @list.position = @board.lists.length.to_f
    @list.archived = false
    if @list.save
      redirect_to list_url(@list)
    else
      flash.now[:notices] = @list.errors.full_messages
      render :new
    end
  end

  def show
    @list = List.find_by_id(params[:id]);
    if @list
      render :show
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def edit
    @list = List.find_by_id(params[:id])
    if @list
      render :edit
    else
      render :text => "404 Not Found", :status => 404
    end
  end

  def update
    @list = List.find_by_id(params[:id])
    lists = @list.board.lists
    new_position = params[:list][:position].to_i
    p new_position
    if new_position == 0
      position_value = lists[0].position - 1
    elsif new_position == lists.length - 1
      position_value = (lists.length + lists[new_position].position) / 2
    else
      position_value == (lists[new_position - 1].position +
                         lists[new_position].position) / 2
    end
    params[:list][:position] = position_value
    if @list.update_attributes(params[:list])
      redirect_to list_url(@list)
    else
      flash.now[:notices] = @list.errors.full_messages
      render :edit
    end
  end

  def destroy
    @list = List.find_by_id(params[:id])
    @board = @list.board
    @list.destroy
    redirect_to board_url(@board)
  end

  private



end
